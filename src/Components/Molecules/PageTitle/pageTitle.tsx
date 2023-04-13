"use client";

import { Sub4 } from "Components/Atoms/Text/text";
import ArrowLeft from "/public/svg/arrowLeft.svg";
import Router, { useRouter } from "next/navigation";

const PageTitle = ({ title }: { title: string }) => {
  const router = useRouter();

  const onBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-start w-full relative">
      <button onClick={onBack}>
        <ArrowLeft />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2">
        <Sub4 title={title} />
      </div>
    </div>
  );
};
export default PageTitle;
