import { useCallback, useEffect, useState } from "react";
import CreateStatusCard from "../Components/CreateStatusCard/CreateStatusCard";
import StatusCard from "../Components/StatusCard/StatusCard";
import { User } from "../models/User";
import { Like } from "../models/Like";
import { getToken } from "../utils/getToken"

interface FeedCardProps {
  _id: string;
  message: string;
  createdBy: User;
  likes: Like[];
  createdAt: string;
}

export default function Home() {
  const [callFeed, setFeedCard] = useState<FeedCardProps[]>([]);

  const fetchFeed = useCallback(async () => {
    const response = await fetch("/api/status/allStatus", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`,
      }
    });

    const data = await response.json();
    // console.log(data)

    setFeedCard(data);
  }, [])

  useEffect(() => {
      fetchFeed();
  }, [fetchFeed]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <div style={{
        width: "100%",
      }}>
        <CreateStatusCard onSubmit={fetchFeed} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          margin: "10px"
        }}
      >
        {callFeed.map((item) => {
          return (
            <StatusCard
              key={item._id}
              _id={item._id}
              message={item.message}
              createdBy={item.createdBy}
              likes={item.likes}
              createdAt={item.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}
