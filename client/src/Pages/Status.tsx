import { useState, useEffect, useCallback } from "react";
import SingleStatusCard from "../Components/SingleStatusCard/SingleStatusCard";
import { useParams } from "react-router-dom";
import { StatusCardProps } from "../Components/SingleStatusCard/SingleStatusCard";
import AddCommentButton from "../Components/AddCommentButton/AddCommentButton";
import AddLike from "../Components/AddLike/AddLike";
import { Box, Button } from "@mui/material";
import { AddCommentCard } from "../Components/AddCommentCard/AddCommentCard";
import CommentCard from "../Components/CommentCard/CommentCard";
import { useLikeStatus } from "../hooks/useLikeStatus";
import { useGetOneStatus } from "../hooks/useGetOneStatus";
import { getToken } from "../utils/getToken";

const Status = () => {
  const [statusInformation, setStatusInformation] = useState<StatusCardProps>();
  const [commentButton, setCommentButton] = useState<boolean>(false);

  // Hooks
  const { likeStatus } = useLikeStatus();

  // id for status
  const { id } = useParams<{ id: string }>();

  // show create comment component
  const showCommentCard = () => {
    setCommentButton(true);
  };

  const getOneStatus = useCallback(async () => {
    const response = await fetch(`/api/status/singleStatus/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`,
      }
    });

    const data = await response.json();

    setStatusInformation(data);
  }, [id]);

  const updateStatus = useCallback(async () => {
    await likeStatus(id);
  }, [id, likeStatus]);

  useEffect(() => {
    getOneStatus();
  }, [getOneStatus, id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          border: "2px solid black"
        }}
      >
        {typeof statusInformation !== "undefined" && (
          <SingleStatusCard
            _id={statusInformation._id}
            message={statusInformation.message}
            createdBy={statusInformation.createdBy}
            createdAt={statusInformation.createdAt}
            likes={statusInformation.likes}
            statusComments={statusInformation.statusComments}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px"
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
      <Box>
        {statusInformation?.statusComments?.map((item) => {
          return (
            <CommentCard
              key={item._id}
              commentText={item.commentText}
              commentCreator={item.commentCreator}
              createdAt={item.createdAt}            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Status;
