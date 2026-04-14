import { HiOutlineHandRaised } from "react-icons/hi2";

const TimelineCard = () => {
  return (
    <div className="w-full rounded-md border border-gray-200 bg-[#f9fafb] px-4 py-3 hover:bg-white transition">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <HiOutlineHandRaised className="text-lg" />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-slate-800">
            Meetup{" "}
            <span className="font-normal text-slate-500">with Tom Baker</span>
          </p>

          <span className="text-xs text-slate-500">March 29, 2026</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
