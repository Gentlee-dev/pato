import FullParking from "/public/svg/fullParking.svg";
import EmptyParking from "/public/svg/emptyParking.svg";
import FullToilet from "/public/svg/fullToilet.svg";
import EmptyToilet from "/public/svg/emptyToilet.svg";

export const Scoring = ({
  score,
  setScore,
  type,
}: {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  type: "parking" | "toilet";
}) => {
  return (
    <div className="flex justify-start relative">
      {type === "parking" ? <EmptyParking /> : <EmptyToilet />}
      <div
        style={{ width: `${score * 20}%` }}
        className="absolute overflow-hidden transition-all"
      >
        {type === "parking" ? <FullParking /> : <FullToilet />}
      </div>
      <input
        value={score}
        onChange={(e) => setScore(+e.target.value)}
        type="range"
        className="w-full absolute h-full  cursor-pointer opacity-0"
        min={0}
        max={5}
      />
    </div>
  );
};
