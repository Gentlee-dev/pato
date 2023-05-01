import { Space8 } from "Components/Atoms/space";
import { Body3 } from "Components/Atoms/Text/text";
import Input from "Components/Atoms/Input/input";

const LabelInput = ({
  title,
  value,
  setValue,
  onchange,
  placeholder,
  readOnly = false,
}: {
  title: string;
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  onchange?: any;
  placeholder: string;
  readOnly?: boolean;
}) => {
  return (
    <>
      <Body3 title={title} />
      <Space8 />
      <Input
        readOnly={readOnly}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
      />
    </>
  );
};
export default LabelInput;
