import Provider from "Redux/provider";
import "./global.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr" className="">
      <head />
      <body className="bg-gray03">
        <div className="max-w-3xl pt-56 bg-white m0a min-h-[100vh]">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
