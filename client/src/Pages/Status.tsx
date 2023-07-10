import { useState, useEffect } from "react";
import SingleStatusCard from "../Components/SingleStatusCard/SingleStatusCard";
import { useParams } from "react-router-dom";
import { StatusCardProps } from "../Components/SingleStatusCard/SingleStatusCard";
import AddCommentButton from "../Components/AddCommentButton/AddCommentButton";
import AddLike from "../Components/AddLike/AddLike";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box, Typography } from "@mui/material";
// import { useAuthContext } from "../hooks/useAuthContext";

const Status = () => {
  const [statusInformation, setStatusInformation] = useState<StatusCardProps | undefined>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getOneStatus = async () => {
      const response = await fetch(`/api/status/singleStatus/${id}`);

      const data = await response.json();

      setStatusInformation(data);
    };

    getOneStatus();
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box>
        { typeof statusInformation !== "undefined"  &&
          <SingleStatusCard
            _id={statusInformation._id}
            message={statusInformation.message}
            createdBy={statusInformation.createdBy}
            createdAt={statusInformation.createdAt}
          />
        }
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <AddCommentButton />
        <AddLike />
      </Box>
    </Box>
  );
};

export default Status;
