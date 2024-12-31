import { H1, H5 } from "@/components/ui/heading-with-anchor";
import React from "react";
import { format } from "date-fns";

const TodayHeader = () => {
  const todayDate = format(new Date(), "EEEE, d MMMM");

  return (
    <div className="flex flex-col gap-5">
      <H1 className="heading-primary">
        To<span className="heading-secondary">day</span>
      </H1>
      <H5 className="text-gray-500 text-sm">{todayDate}</H5>
      <H5>List of today&apos;s tasks</H5>
    </div>
  );
};

export default TodayHeader;