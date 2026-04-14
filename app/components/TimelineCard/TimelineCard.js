import Image from "next/image";

const TimelineCard = ({ timeline }) => {
  return (
    <div className="w-full rounded-md border border-gray-200 bg-[#f9fafb] px-4 py-3 hover:bg-white transition">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full text-amber-600">
          <Image src={timeline.image} height={50} width={50} alt="" />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-slate-800">
            {timeline.call}{" "}
            <span className="font-normal text-slate-500">
              with {timeline.name}
            </span>
          </p>

          <span className="text-xs text-slate-500">{timeline.date}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
