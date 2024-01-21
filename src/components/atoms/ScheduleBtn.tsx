import { ReactNode } from "react";

type PropsType = {
  onClick: () => void;
  children: ReactNode;
};

export const ScheduleBtn = ({ onClick, children }: PropsType) => {
  return (
    <button
      className="block bg-lime-800 text-white rounded-sm w-[94%] px-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
