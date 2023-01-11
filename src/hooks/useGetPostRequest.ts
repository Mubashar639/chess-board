import axios from "axios";
import { useEffect, useState } from "react";

interface ResponseType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function useGetPostRequest(id: number) {
  const [postRequestedData, setPostRequestedData] =
    useState<null | ResponseType>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        setPostRequestedData({ ...data });
      } catch (err) {
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return { postRequestedData, loading };
}
