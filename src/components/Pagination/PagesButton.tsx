import { FC } from "react";

interface PagesButtonProps {
  booleanExpression: boolean;
  styles: string;
  func: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}

const PagesButton: FC<PagesButtonProps> = ({
  booleanExpression,
  styles,
  func,
  title,
}) => {
  return (
    <>
      {booleanExpression && (
        <button className={styles} onClick={func}>
          {title}
        </button>
      )}
    </>
  );
};
export default PagesButton;
