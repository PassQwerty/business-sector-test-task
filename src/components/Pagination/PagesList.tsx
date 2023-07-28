import { memo } from "react";
import PagesButton from "./PagesButton";
import PagesButtonsList from "./PagesButtonsView";

interface PropsPagination {
  allElements: number;
  pageLimit: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const tailwindStyles = {
  buttonsPagination: "flex justify-between",
  buttonsPaginationContainer: "py-4 px-4",
  buttonsControls: "px-4 text-xl font-bold active:text-green-600",
};

const PagesList = ({
  allElements,
  pageLimit,
  currentPage,
  setCurrentPage,
}: PropsPagination) => {
  let allPages = [];

  const lastPageIndex = Math.ceil(allElements / pageLimit);

  for (let i = 1; i <= lastPageIndex; i++) {
    allPages.push(i);
  }

  if (allPages.length <= 1) {
    return null;
  }

  return (
    <div
      className={
        currentPage === 1 || currentPage === lastPageIndex
          ? `${tailwindStyles.buttonsPagination} !justify-center`
          : `${tailwindStyles.buttonsPagination}`
      }
    >
      <PagesButton
        booleanExpression={currentPage > 1}
        styles={tailwindStyles.buttonsControls}
        func={() => setCurrentPage(currentPage - 1)}
        title={"Назад"}
      />
      <PagesButtonsList
        allPages={allPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <PagesButton
        booleanExpression={currentPage < lastPageIndex}
        styles={tailwindStyles.buttonsControls}
        func={() => setCurrentPage(currentPage + 1)}
        title={"Далее"}
      />
    </div>
  );
};
export default memo(PagesList);
