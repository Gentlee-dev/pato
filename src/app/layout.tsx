import "./global.scss";
import ReactQueryProvider from "./reactQuery";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr" className="">
      <head />
      <body className="bg-gray03">
        <div className="max-w-3xl px-20 bg-white m0a">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
