import { ButtonHTMLAttributes, FC, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customFunc: () => void;
}

const objectIcon = {
  arrowUp: MdKeyboardArrowUp,
  arrowDown: MdKeyboardArrowDown,
};

const Icon: FC<ButtonProps> = ({ customFunc, ...props }) => {
  const ArrowUp = objectIcon.arrowUp;
  const ArrowDown = objectIcon.arrowDown;

  const [isArrowUp, setIsArrowUp] = useState(false);

  const handleClick = () => {
    customFunc();
    setIsArrowUp((prevIsArrowUp) => !prevIsArrowUp);
  };

  return (
    <button onClick={handleClick} {...props}>
      {isArrowUp ? <ArrowUp /> : <ArrowDown />}
    </button>
  );
};
export default Icon;
