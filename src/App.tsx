import "./App.css";
import { HeadersList } from "./components/HeaderTitle/HeadersList";
import PaginationLogic from "./components/Pagination/PaginationLogic";
import Search from "./components/Search/Search";
import { useInit } from "./hooks/useInit";

const tailwindStyles = {
  container: "ml-auto mr-auto max-w-7xl pl-4 pr-4",
};

function App() {
  useInit();

  return (
    <div className={tailwindStyles.container}>
      <Search />
      <HeadersList />
      <PaginationLogic />
    </div>
  );
}

export default App;
