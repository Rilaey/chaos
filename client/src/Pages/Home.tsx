import { useEffect, useState } from "react";
import CreateStatusCard from "../Components/CreateStatusCard/CreateStatusCard";
import FeedCard from "../Components/Feed/Feed";
import { User } from "../models/User"

interface FeedCardProps {
  _id: string;
  message: string;
  createdBy: User;
  createdAt: string;
}

export default function Home() {
  const [callFeed, setFeedCard] = useState<FeedCardProps[]>([])


  useEffect(() => {
    const callFeed = async () => {
      const response = await fetch("/api/status/allStatus");

      const data = await response.json();

      // console.log(data);

      setFeedCard(data);
    };

    callFeed();
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <CreateStatusCard />
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap"
      }}>
        {callFeed.map((item) => {
          return (
            <FeedCard
            key={item._id}
            _id={item._id}
            message={item.message}
            createdBy={item.createdBy}
            createdAt={item.createdAt}
            />
          )
        })}
      </div>
    </div>
  );
}
