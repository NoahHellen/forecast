import React from "react";
import DisplayTimeSeries from "../components/time_series/DisplayTimeSeries";
import IntroTimeSeries from "../components/time_series/IntroTimeSeries";

function TimeSeriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 pt-20">
      <IntroTimeSeries />
      <DisplayTimeSeries />
    </main>
  );
}

export default TimeSeriesPage;
