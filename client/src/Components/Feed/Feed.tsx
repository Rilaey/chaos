import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

interface FeedCardProps {
  _id: string;
  message: string;
  createdBy: string | number;
}

const Feed = () => {
  const [feedCard, setFeedCard] = useState<FeedCardProps[]>([]);

  useEffect(() => {
    const callFeed = async () => {
      const response = await fetch("/api/status/allStatus");

      const data = await response.json();

      console.log(data);

      setFeedCard(data);
    };

    callFeed();
  }, []);

  return (
    <div>
      {feedCard.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px",
              border: "2px solid red"
            }}
            key={item._id}
          >
            <Typography>{item.message}</Typography>
            <Typography variant="h2">{item.createdBy.email}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
