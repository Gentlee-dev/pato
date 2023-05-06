import React from "react";
import ReactQueryProvider from "../ReactQuery/reactQuery";
import Provider from "Redux/provider";
import "./global.scss";
import Script from "next/script";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr" className="">
      <head />
      <body className="bg-gray03">
        <div className="max-w-3xl pt-56 bg-white m0a min-h-[100vh]">
          <Provider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </Provider>
        </div>
        <Script
          src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
          defer
        />
      </body>
    </html>
  );
};
export default RootLayout;
