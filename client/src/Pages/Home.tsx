import React from 'react'
import CreateStatusCard from "../Components/CreateStatusCard/index"
import FeedCard from "../Components/Feed/Feed";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div>
        <CreateStatusCard />
      </div>
      <div>
        <FeedCard />
      </div>
    </div>
  )
}
