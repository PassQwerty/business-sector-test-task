interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

interface SortingHeaderProps {
  title: string;
  sortBy: QuickBySortString;
  style: string;
}

type HeadersType = {
  title: string;
  sortBy: QuickBySortString;
  style: string;
};

interface QuickSort {
  (
    arr: Post[],
    sortBy?: "id" | "title" | "body",
    isDescending?: boolean
  ): Post[];
}

interface QuickBySort {
  sortBy: "id" | "title" | "body";
}
type QuickBySortString = "id" | "title" | "body";

interface PostListProps {
  data: Data;
}

type Data = Post[];
