"use client";
import { createContext, useState } from "react";

export const Timelinecontext = createContext(null);
const TimelineContextWrapper = ({ children }) => {
  const [timelines, setTimelines] = useState([]);

  const handleTimeLineData = (data) => {
    const UpdatedTimeline = [...timelines, data];
    setTimelines(UpdatedTimeline);
  };

  const timelineData = {
    timelines,
    handleTimeLineData,
  };
  return (
    <Timelinecontext.Provider value={timelineData}>
      {children}
    </Timelinecontext.Provider>
  );
};

export default TimelineContextWrapper;


[{call: 'Text', name: 'Olivia Martinez', date: 'April 14, 2026'},
{call: 'Video', name: 'Olivia Martinez', date: 'April 14, 2026'},
{call: 'Call', name: 'Olivia Martinez', date: 'April 14, 2026'}]

