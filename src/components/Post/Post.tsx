const tailwindStyles = {
  postItem: "grid grid-cols-[85px,1fr,1fr]",
  id: "flex border  justify-center items-center",
  title: "flex border p-4 justify-start items-center",
  body: "flex border p-4 justify-start items-center",
};

const Post = ({ id, title, body }: Post) => {
  return (
    <div className={tailwindStyles.postItem}>
      <h3 className={tailwindStyles.id}> {id} </h3>
      <h3 className={tailwindStyles.title}>{title} </h3>
      <h3 className={tailwindStyles.body}> {body} </h3>
    </div>
  );
};
export default Post;
