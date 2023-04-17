const Button = ({
  title,
  circle = false,
  size = "xl",
  onClick,
}: {
  title: string;
  circle?: boolean;
  size?: "xl" | "md";
  onClick?: () => void;
}) => {
  const typedStyle = circle ? "rounded-3xl" : "w-full rounded-lg";
  const sizeStyle = size === "xl" ? "leading-48 px-48" : "leading-32 px-24";
  return (
    <button
      onClick={onClick}
      className={`text-white bg-primary ${sizeStyle} ${typedStyle} `}
    >
      {title}
    </button>
  );
};

export const ModalButton = ({
  title,
  onClick,
}: {
  title: string;
  circle?: boolean;
  size?: "xl" | "md";
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-white leading-48 px-48 w-full rounded-b-lg bg-primary  `}
    >
      {title}
    </button>
  );
};

export default Button;
