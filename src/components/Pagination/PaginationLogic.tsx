import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";
import PagesList from "./PagesList";
import PostView from "../Post/PostView";

const tailwindStyles = {
  todosContainer: "flex flex-col justify-between h-[80vh]",
};

const PaginationLogic = () => {
  const data = useSelector((state: RootState) => state.data.sortedPost);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsLimit] = useState(6);

  const lastPostIndex = Math.min(currentPage * postsLimit, data.length);
  const firstPostIndex = lastPostIndex - postsLimit;

  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  return (
    <div className={tailwindStyles.todosContainer}>
      <PostView data={currentPosts} />
      <PagesList
        allElements={data.length}
        pageLimit={postsLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default PaginationLogic;
