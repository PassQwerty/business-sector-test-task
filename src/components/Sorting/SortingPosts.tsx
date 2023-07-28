import { useCallback } from "react";
import Icon from "../Icon/Icon";
import { quickSort } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setSortedPosts, changeSorted } from "../../features/postsSlice";

export const SortingPosts = ({ sortBy }: QuickBySort) => {
  const dispatch = useDispatch();

  const sorted = useSelector((state: RootState) => state.data.sortedBy);
  const data = useSelector((state: RootState) => state.data.sortedPost);

  const handleSorted = useCallback(() => {
    dispatch(changeSorted(!sorted));
    const newData = quickSort(data, sortBy, sorted);
    dispatch(setSortedPosts(newData));
  }, [sorted, data]);

  return <Icon customFunc={handleSorted} />;
};
