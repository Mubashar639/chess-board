import React from "react";
import useGetRequest from "../../hooks/useGetPostRequest";
import "./requestedDataShow.css";

export default function RequestedDataShow() {
  const { loading, postRequestedData } = useGetRequest(1);
  return (
    <div className="requestData">
      {loading ? (
        "Loading"
      ) : (
        <div className="post_data">
          <h1>Title:{postRequestedData?.title}</h1>
          <h1>Id: {postRequestedData?.id}</h1>
          <p>Desc:{postRequestedData?.body}</p>
          <p>User Id:{postRequestedData?.userId}</p>
        </div>
      )}
    </div>
  );
}
