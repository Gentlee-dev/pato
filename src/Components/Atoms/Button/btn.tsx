const Button = ({
  title,
  circle = false,
  size = "xl",
}: {
  title: string;
  circle?: boolean;
  size?: "xl" | "md";
}) => {
  const typedStyle = circle ? "rounded-3xl" : "w-full rounded-lg";
  const sizeStyle = size === "xl" ? "leading-48 px-48" : "leading-32 px-24";
  return (
    <button className={`text-white bg-primary ${sizeStyle} ${typedStyle} `}>
      {title}
    </button>
  );
};

export default Button;
