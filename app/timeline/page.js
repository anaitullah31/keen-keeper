"use client";
import { useContext } from "react";
import TimelineCard from "../components/TimelineCard/TimelineCard";
import { Timelinecontext } from "../context/TimelineContext";

const Timeline = () => {
  const { timelines } = useContext(Timelinecontext);
  return (
    <section className="w-full bg-[#f6f7f9] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Container */}
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 sm:text-4xl md:text-5xl">
            Timeline
          </h1>

          {/* Filter + Search */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
            {/* Filter */}
            <div className="w-full sm:w-64">
              <select className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-slate-500 outline-none transition focus:border-[#245b4b] focus:ring-2 focus:ring-[#245b4b]/10">
                <option>Filter timeline</option>
                <option>All</option>
                <option>Meetup</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
              </select>
            </div>

            {/* Search */}
            <div className="w-full sm:w-80">
              <input
                type="text"
                placeholder="Search timeline..."
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-[#245b4b] focus:ring-2 focus:ring-[#245b4b]/10"
              />
            </div>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-3">
          {timelines.map((timeline, indx) => (
            <TimelineCard key={indx} timeline={timeline} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
