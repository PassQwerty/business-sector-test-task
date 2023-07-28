import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosts, setSortedPosts } from "../features/postsSlice";

const GetPosts = async (): Promise<Data> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return json;
};

export const useInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const newData = await GetPosts();
      dispatch(setPosts(newData));
      dispatch(setSortedPosts(newData));
    })();
  }, []);
};
