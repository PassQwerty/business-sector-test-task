import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setSortedPosts } from "../../features/postsSlice";
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const tailwindStyles = {
  form: " my-4 w-1/2",
  label: "flex items-center",
  input: "w-full p-4 bg-slate-600 outline-none text-white font-semibold",
  svg: "relative -left-10 -mr-10 w-8 h-8 fill-white cursor-pointer",
};

const Search = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.posts);

  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce({ value: searchValue, delay: 200 });

  useEffect(() => {
    if (debouncedValue === "") {
      dispatch(setSortedPosts(data));
      return;
    }

    const filteredData = data.filter(
      (post: Post) =>
        post.id.toString().includes(debouncedValue) ||
        post.title.includes(debouncedValue) ||
        post.body.includes(debouncedValue)
    );
    dispatch(setSortedPosts(filteredData));
  }, [debouncedValue]);

  return (
    <div>
      <form
        className={tailwindStyles.form}
        method="post"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className={tailwindStyles.label}>
          <input
            className={tailwindStyles.input}
            name="firstName"
            placeholder="Поиск"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <AiOutlineSearch className={tailwindStyles.svg} />
        </label>
      </form>
    </div>
  );
};
export default Search;
