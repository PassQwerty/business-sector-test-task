import Post from "./Post";

const tailwindStyles = {
  noTodoText: " my-4 w-full text-xl font-semibold text-slate-900",
  postsContainer: "flex flex-col",
};

const PostView = ({ data }: PostListProps) => {
  if (!data.length) {
    return <p className={tailwindStyles.noTodoText}>Записей пока нет</p>;
  }

  return (
    <div className={tailwindStyles.postsContainer}>
      {data.map((item) => (
        <Post key={item.id} id={item.id} title={item.title} body={item.body} />
      ))}
    </div>
  );
};

export default PostView;
