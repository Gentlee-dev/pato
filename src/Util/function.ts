export const palete: { [index: number]: string } = {
  0: "text-primary",
  1: "text-gray01",
  2: "text-gray02",
  3: "text-gray03",
  4: "text-gray04",
  5: "text-gray05",
  6: "text-gray06",
  7: "text-gray07",
  8: "text-gray08",
  9: "text-gray09",
  10: "text-gray10",
};

export const convertToDate = (time: string) => {
  const date = time.split("T")[0];
  return date;
};

/**
 * set폼데이터
 * @param {FormData} formData - 폼데이터
 * @param {} data - 객체
 * @param {} parentKey 키이름(재귀시에만 활용)
 */
export const setFormData = (
  formData: FormData,
  data: any,
  parentKey?: string
) => {
  Object.keys(data).forEach((key) => {
    const val = data[key]; // value

    if (parentKey) key = `${parentKey}[${key}]`; // 값이 객체일때 해당객체에 접근

    if (val instanceof Object && !Array.isArray(val)) {
      return setFormData(formData, val, key);
    }

    if (Array.isArray(val)) {
      val.forEach((v, idx) => {
        if (v instanceof Object) {
          setFormData(formData, v, `${key}[${idx}]`);
        } else {
          formData.append(`${key}[${idx}]`, v);
        }
      });
    } else {
      formData.append(key, val);
    }
  });
};
