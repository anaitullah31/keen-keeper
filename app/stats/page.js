"use client";

import { useContext, useMemo } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Timelinecontext } from "../context/TimelineContext";

const Stats = () => {
  const { timelines } = useContext(Timelinecontext);

  const colorMap = {
    Text: "#7c3aed",
    Call: "#1f5a4c",
    Video: "#2cab69",
    Meetup: "#f59e0b",
  };

  const chartData = useMemo(() => {
    if (!timelines || timelines.length === 0) return [];

    const groupedData = timelines.reduce((acc, item) => {
      const type = item.call;

      if (!acc[type]) {
        acc[type] = {
          name: type,
          value: 0,
          fill: colorMap[type] || "#94a3b8",
        };
      }

      acc[type].value += 1;
      return acc;
    }, {});

    return Object.values(groupedData);
  }, [timelines]);

  return (
    <section className="bg-[#f5f7f9] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl md:text-5xl">
            Friendship Analytics
          </h1>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <h2 className="mb-6 text-lg font-semibold text-[#1f5a4c]">
            By Interaction Type
          </h2>

          <div className="h-65 w-full sm:h-80 md:h-95">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    innerRadius={60}
                    outerRadius={95}
                    paddingAngle={6}
                    cornerRadius={10}
                  />
                  <Tooltip />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    wrapperStyle={{
                      fontSize: "14px",
                      paddingTop: "18px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-500">
                No timeline data available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
