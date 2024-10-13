import ReactApexChart from "react-apexcharts";

const TimeSeriesChart = ({ data }) => {
  const series = [
    {
      name: "Total Visitors",
      data: data.map((item) => ({
        x: new Date(
          `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`
        ),
        y: item.adults + item.children + item.babies,
      })),
    },
  ];

  const options = {
    chart: { type: "line", zoom: { enabled: true }, toolbar: { show: false } },
    xaxis: { type: "datetime" },
    colors: ["#3B82F6"], // Primary blue color
    title: {
      text: "Number of Visitors Per Day",
      align: "center",
      style: { color: "#1E40AF" },
    },
    stroke: { width: 3, curve: "smooth" },
    grid: { borderColor: "#E5E7EB" },
  };

  return (
    <div className="bg-[#F0F8FF] p-4 rounded-md shadow-md">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default TimeSeriesChart;
