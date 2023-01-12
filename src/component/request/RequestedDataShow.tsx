import React, { useEffect, useState } from "react";
import useGetRequest from "../../hooks/useGetPostRequest";
import "./requestedDataShow.css";

export default function RequestedDataShow() {
  const [postId, setValue] = useState(1);
  const [color, setColor] = useState("red");
  let wordArr = ["one", "Two", "three", "three", "One", "tWo", "onE", "five"];
  const [currentColor, setCurrenctColor] = useState("#282c34");

  const [object, setObject] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    let resultObj: { [key: string]: number } = {};

    for (let latter of wordArr) {
      if (resultObj.hasOwnProperty(latter.toLocaleLowerCase())) {
        resultObj[latter.toLocaleLowerCase()] =
          resultObj[latter.toLocaleLowerCase()] + 1;
      } else {
        resultObj[latter.toLocaleLowerCase()] = 1;
      }
      setObject(resultObj);
    }
  }, []);

  const { loading, postRequestedData } = useGetRequest(postId);
  return (
    <div className="requestData" style={{ background: currentColor }}>
      <input
        name="postID"
        value={postId}
        type="number"
        onChange={(e: any) => setValue(e.target.value)}
      />

      <input
        name="color"
        value={color}
        type="text"
        onChange={(e: any) => setColor(e.target.value)}
      />
      <button
        onClick={() => {
          setCurrenctColor(color);
        }}
      >
        {" "}
        set color
      </button>
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

      <>
        <table className="table-color">
          <tr>
            <th>Words</th>
            <th>Count</th>
          </tr>
          {Object.keys(object).map((keyItem) => {
            return (
              <tr key={keyItem}>
                <td>{keyItem}</td>
                <td>{object[keyItem]}</td>
              </tr>
            );
          })}
        </table>
      </>
    </div>
  );
}
