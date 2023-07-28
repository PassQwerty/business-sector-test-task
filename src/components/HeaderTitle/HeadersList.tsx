import HeaderTitle from "./HeaderTitle";

const tailwindStyles = {
  cortingContainer:
    "grid grid-cols-[85px,1fr,1fr] p-4 bg-slate-900 text-slate-200 text-base font-bold",
  containerId: "flex gap-2 justify-center items-center",
  containerTitle: "flex gap-2 justify-center items-center",
  containerBody: "flex gap-2 justify-center items-center",
};

export const headers: HeadersType[] = [
  {
    title: "ID",
    sortBy: "id",
    style: tailwindStyles.containerId,
  },
  {
    title: "Заголовок",
    sortBy: "title",
    style: tailwindStyles.containerTitle,
  },
  {
    title: "Описание",
    sortBy: "body",
    style: tailwindStyles.containerBody,
  },
];

export const HeadersList = () => {
  return (
    <div className={tailwindStyles.cortingContainer}>
      {headers.map((header, i) => (
        <HeaderTitle
          key={i}
          title={header.title}
          sortBy={header.sortBy}
          style={header.style}
        />
      ))}
    </div>
  );
};
