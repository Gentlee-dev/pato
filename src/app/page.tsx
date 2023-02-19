import Image from "next/image";
import logo from "public/img/logo.png";
// import { ReactComponent as Require  from "Util/svg/require.svg";
import ReactComponent from "Util/svg/require.svg";

const Index = () => {
  return (
    <div className="flex">
      <div className="text-center m0a">
        <Image src={logo} alt="로고" />
        <div className="rounded-3xl border-1 leading-48">
          <ReactComponent />
          <input className="" type="text" />
        </div>
      </div>
    </div>
  );
};
export default Index;
