import { FC } from "react";
import { SortingPosts } from "../Sorting/SortingPosts";

const HeaderTitle: FC<SortingHeaderProps> = ({ title, sortBy, style }) => {
  return (
    <div className={style}>
      <h2>{title}</h2>
      <SortingPosts sortBy={sortBy} />
    </div>
  );
};

export default HeaderTitle;
