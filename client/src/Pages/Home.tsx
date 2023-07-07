import { useEffect, useState } from "react";
import CreateStatusCard from "../Components/CreateStatusCard/CreateStatusCard";
import FeedCard from "../Components/Feed/Feed";
import { User } from "../models/User";
import { useAuthContext } from "../hooks/useAuthContext";

interface FeedCardProps {
  _id: string;
  message: string;
  createdBy: User;
  createdAt: string;
}

export default function Home() {
  const [callFeed, setFeedCard] = useState<FeedCardProps[]>([]);

  const { user } = useAuthContext();

  useEffect(() => {
    const callFeed = async () => {
      const response = await fetch("/api/status/allStatus", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.user.token}`
        }
      });

      const data = await response.json();

      setFeedCard(data);
    };

    if (user) {
      callFeed();
    } else {
      setFeedCard([]);
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <CreateStatusCard />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap"
        }}
      >
        {callFeed.map((item) => {
          return (
            <FeedCard
              key={item._id}
              _id={item._id}
              message={item.message}
              createdBy={item.createdBy}
              createdAt={item.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}
