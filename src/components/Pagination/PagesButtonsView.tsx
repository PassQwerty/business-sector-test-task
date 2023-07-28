const tailwindStyles = {
  buttonsPaginationContainer: "py-4 px-4",
  buttonsPage: "px-4 text-base font-semibold",
};

interface PagesButtonsViewProps {
  allPages: number[];
  currentPage: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
}

const PagesButtonsList = ({
  allPages,
  currentPage,
  setCurrentPage,
}: PagesButtonsViewProps) => {
  return (
    <div className={tailwindStyles.buttonsPaginationContainer}>
      {allPages.map((page, i) =>
        // prettier-ignore
        <button
            key={i}
            className={`
              ${tailwindStyles.buttonsPage} 
              ${page === currentPage ? "text-green-600" : ""}
            `}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
      )}
    </div>
  );
};
export default PagesButtonsList;
