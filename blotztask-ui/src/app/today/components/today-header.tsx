import { H1, H5 } from "@/components/ui/heading-with-anchor";
import React from "react";

const TodayHeader = () => {
  const date = new Date();
  const dayName = date.toLocaleDateString("en-AU", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-AU", { month: "long" });

  return (
    <div className="flex flex-col gap-5">
      <H1 className="heading-primary">
        To<span className="heading-secondary">day</span>
      </H1>
      <H5 className="text-gray-500 text-sm">{`${dayName}, ${day}. ${month}`}</H5>
      <H5>List of today&apos;s tasks</H5>
    </div>
  );
};

export default TodayHeader;