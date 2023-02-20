import "./global.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr">
      <head />
      <body className="max-w-3xl px-20 m0a">{children}</body>
    </html>
  );
};
export default RootLayout;
