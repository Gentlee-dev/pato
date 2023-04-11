const Button = ({ title, circle = false }: { title: string; circle?: boolean }) => {
  const typedStyle = circle ? "px-48 rounded-3xl" : "w-full rounded-lg";
  return (
    <button className={` text-white   bg-primary leading-48 ${typedStyle} `}>
      {title}
    </button>
  );
};

export default Button;
