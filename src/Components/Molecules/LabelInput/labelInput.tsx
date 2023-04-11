import Image from "next/image";
import { Space16, Space8 } from "Components/Atoms/space";
import Point from "Components/Atoms/point";
import MetaInfo from "Components/Atoms/metaInfo";
import Link from "next/link";
import { Body3 } from "Components/Atoms/Text/text";
import Input from "Components/Atoms/Input/input";

const LabelInput = ({
  title,
  value,
  setValue,
  onchange
}:{
  title:string,
  value:string,
  setValue?:React.Dispatch<React.SetStateAction<string>>,
  onchange?:any
}) => {
  return (
    <>
      <Body3 title={title} />
      <Space8 />
      <Input value={value} setValue={setValue}  />
    </>
  );
};
export default LabelInput;
