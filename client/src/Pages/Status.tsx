import { useState, useEffect, useCallback } from "react";
import SingleStatusCard from "../Components/SingleStatusCard/SingleStatusCard";
import { useParams } from "react-router-dom";
import { StatusCardProps } from "../Components/SingleStatusCard/SingleStatusCard";
import AddCommentButton from "../Components/AddCommentButton/AddCommentButton";
import AddLike from "../Components/AddLike/AddLike";
import { Box } from "@mui/material";
import { AddCommentCard } from "../Components/AddCommentCard/AddCommentCard";

const getUserId = (): string => {
  const userJson: string | null = localStorage.getItem("user");
  const toJson: { user: { _id: string } } = JSON.parse(userJson as string);
  const statusCreator: string = toJson.user._id;

  return statusCreator;
};

const Status = () => {
  const [statusInformation, setStatusInformation] = useState<
    StatusCardProps | undefined
  >();

  const [commentButton, setCommentButton] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  const showCommentCard = () => {
    setCommentButton(true);
    console.log("working");
  };

  const updateStatus = useCallback(async () => {
    await fetch(`/api/status/likeStatus/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: getUserId()
      })
    });

    console.log(statusInformation);
  }, [id, statusInformation]);

  useEffect(() => {
    const getOneStatus = async () => {
      const response = await fetch(`/api/status/singleStatus/${id}`);

      const data = await response.json();
      // console.log(data);

      setStatusInformation(data);
    };

    getOneStatus();
  }, [id, updateStatus]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px",

        }}
      >
        {typeof statusInformation !== "undefined" && (
          <SingleStatusCard
            _id={statusInformation._id}
            message={statusInformation.message}
            createdBy={statusInformation.createdBy}
            createdAt={statusInformation.createdAt}
            likes={statusInformation.likes}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // width: "100%",
            margin: "10px",
            // flexGrow: 1
          }}
        >
          <AddCommentButton showCard={showCommentCard} />
          {typeof statusInformation !== "undefined" && (
            <AddLike
              likes={statusInformation.likes}
              likeStatus={updateStatus}
            />
          )}
        </Box>
      </Box>
      <Box>{commentButton && <AddCommentCard />}</Box>
    </Box>
  );
};

export default Status;
