import React, { useState } from "react";
import { RadioForm } from "interface";
import { Body4 } from "../Text/text";
// import "./radio.scss";

/**
 * 라디오 atomic
 * @param {string} value state
 * @param {string} setValue setState
 * @param {string} name 같은 라디오로 묶는 키워드
 * @param {string} idx 현재 radio idx
 * @param {string} id input과 label 묶어줌
 * @param {string} label label 내용
 */

const Radio = ({
  value,
  setValue,
  name,
  dataList,
  vertical = false,
  cancle = false,
}: {
  value: number;
  setValue: any;
  name: string;
  dataList: RadioForm[];
  vertical?: boolean;
  cancle?: boolean;
}) => {
  const onCancle = (idx: number) => {
    if (idx !== value) return;
    setValue(-1);
  };
  return (
    <div
      className={`flex flex-wrap ${
        vertical ? "flex-col gap-10 " : "items-center"
      } `}
    >
      {dataList.map((item) => {
        return (
          <div className="flex items-center my-4" key={item.idx}>
            <input
              name={name}
              className=" w-18 h-18 appearance-none rounded-full border-3 border-[#e2e2e2] mr-4 cursor-pointer checked:bg-primary transition03s"
              id={item.id}
              type="radio"
              checked={item.idx === value}
              onChange={() => setValue(item.idx)}
              onClick={() => onCancle(item.idx)}
            />
            <label className="mr-24 cursor-pointer text-16" htmlFor={item.id}>
              <Body4 color={9} title={item.label} />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
