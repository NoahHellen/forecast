import React, { useEffect } from "react";
import { useDatabase } from "../../state/api";
import { Line } from "react-chartjs-2";
import Chart from "../../lib/chart_config";
import NoData from "./NoData";

function DisplayTimeSeries() {
  const { timeSeries, loading, error, fetchTimeSeries } = useDatabase();

  // Fetch data once when component mounts
  useEffect(() => {
    fetchTimeSeries();
  }, []);

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxTicksLimit: 10,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = timeSeries.map((row) => {
    const date = new Date(row.date);
    return date.toLocaleDateString();
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: timeSeries.map((row) => row.price),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  if (loading) return <div>Loading chart data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (timeSeries.length === 0) return <div>No data available</div>;

  return (
    <div style={{ height: "400px", width: "75%", margin: "0 auto" }}>
      <Line options={options} data={data} />
      <NoData />
    </div>
  );
}

export default DisplayTimeSeries;
