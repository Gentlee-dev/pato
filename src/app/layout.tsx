import "./global.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr" className="">
      <head />
      <body className="bg-gray03">
        <div className="max-w-3xl pt-56 bg-white m0a">{children}</div>
      </body>
    </html>
  );
};
export default RootLayout;
