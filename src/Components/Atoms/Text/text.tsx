import { Palete } from "interface";
import { palete } from "Util/function";
// export const palete: { [index: number]: string } = {
//   1: "text-gray01",
//   2: "text-gray02",
//   3: "text-gray03",
//   4: "text-gray04",
//   5: "text-gray05",
//   6: "text-gray06",
//   7: "text-gray07",
//   8: "text-gray08",
//   9: "text-gray09",
//   10: "text-gray10",
// };

export const H1 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <h1 className={`font-bold ${palete[color]} text-28 leading-36`}>{title}</h1>
  );
};

export const H2 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <h2 className={`font-medium ${palete[color]} text-28 leading-36`}>
      {title}
    </h2>
  );
};

export const Sub1 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <h3 className={`font-bold ${palete[color]} text-24 leading-32`}>{title}</h3>
  );
};

export const Sub2 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <h4 className={`font-medium ${palete[color]} text-24 leading-32`}>
      {title}
    </h4>
  );
};

export const Sub3 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <h5 className={`font-bold ${palete[color]} text-20 leading-26`}>{title}</h5>
  );
};

export const Sub4 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <h6 className={`font-medium ${palete[color]} text-20 leading-26`}>
      {title}
    </h6>
  );
};

export const Body1 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <p className={`font-bold ${palete[color]} text-16 leading-24`}>{title}</p>
  );
};

export const Body2 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <p className={`font-medium ${palete[color]} text-16 leading-24`}>{title}</p>
  );
};

export const Body3 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <p className={`font-bold ${palete[color]} text-14 leading-20`}>{title}</p>
  );
};

export const Body4 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <p className={`font-medium ${palete[color]} text-14 leading-20`}>{title}</p>
  );
};

export const Caption1 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <span className={`font-bold ${palete[color]} text-12 leading-18`}>
      {title}
    </span>
  );
};

export const Caption2 = ({
  title,
  color = 10,
}: {
  title: string;
  color?: Palete;
}) => {
  return (
    <span className={`font-medium ${palete[color]} text-12 leading-18`}>
      {title}
    </span>
  );
};
