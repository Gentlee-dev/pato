"use client";

import BigParkingSVG from "/public/svg/bigParking.svg";
import BigParkingSVGEmpty from "/public/svg/bigParkingEmpty.svg";
import BigToiletSVG from "/public/svg/bigToilet.svg";
import BigToiletSVGEmpty from "/public/svg/bigToiletEmpty.svg";

import FullParking from "/public/svg/fullParking.svg";
import EmptyParking from "/public/svg/emptyParking.svg";
import { useState } from "react";

export const ParkingScoring = ({
  score,
  onClick,
}: {
  score: number;
  onClick: (score: number) => void;
}) => {
  const [score1, setscore1] = useState(0);
  return (
    <div className="flex justify-start relative">
      <div>
        <EmptyParking />
      </div>
      <div
        style={{ width: `${score1 * 20}%` }}
        className="absolute overflow-hidden transition-all"
      >
        <FullParking />
      </div>
      <input
        value={score1}
        onChange={(e) => setscore1(+e.target.value)}
        type="range"
        className="w-full absolute h-full  cursor-pointer"
        min={0}
        max={5}
      />
    </div>
  );
};
export const ToiletScoring = ({
  score,
  onClick,
}: {
  score: number;
  onClick: (score: number) => void;
}) => {
  return (
    <div className="flex justify-center gap-8">
      {Array.from(Array(5)).map((_, idx: number) => (
        <button onClick={() => onClick(idx + 1)}>
          {idx >= score ? (
            <BigToiletSVGEmpty key={idx} />
          ) : (
            <BigToiletSVG key={idx} />
          )}
        </button>
      ))}
    </div>
  );
};
