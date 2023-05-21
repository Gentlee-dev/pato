const Button = ({
  title,
  circle = false,
  size = "xl",
  onClick,
  type = "button",
}: {
  title: string;
  circle?: boolean;
  size?: "xl" | "md";
  onClick?: () => void;
  type?: "button" | "submit";
}) => {
  const typedStyle = circle ? "rounded-3xl" : "w-full rounded-lg";
  const sizeStyle = size === "xl" ? "leading-48 px-48" : "leading-32 px-24";
  return (
    <button
      type={type}
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
  type = "button",
}: {
  title: string;
  circle?: boolean;
  size?: "xl" | "md";
  onClick: () => void;
  type?: "button" | "submit";
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white leading-48 px-48 w-full rounded-b-lg bg-primary  `}
    >
      {title}
    </button>
  );
};

export default Button;
