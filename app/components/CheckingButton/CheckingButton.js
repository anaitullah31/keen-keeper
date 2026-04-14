"use client";
import { Timelinecontext } from "@/app/context/TimelineContext";
import { useContext } from "react";

const CheckingButton = ({ children, call, name, image }) => {
  const { handleTimeLineData } = useContext(Timelinecontext);
  const checkinData = {
    call,
    name,
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image
  };

  return (
    <button
      onClick={() => handleTimeLineData(checkinData)}
      className="flex flex-col cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-[#f8fafc] px-4 py-6 text-slate-700 transition hover:bg-white hover:shadow-sm"
    >
      {children}
    </button>
  );
};

export default CheckingButton;
