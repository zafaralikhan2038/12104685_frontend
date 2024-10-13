import ReactApexChart from "react-apexcharts";

const SparklineChart = ({ data, label }) => {
  const series = [{ data }];

  const options = {
    chart: { type: "line", sparkline: { enabled: true } },
    colors: ['#001F3F'], // Green color for sparklines
    title: { text: label, align: "center", offsetX: 10, style: { color: '#98FF98' } },
    stroke: { width: 2, curve: 'smooth' },
    grid: { borderColor: '#D1D5DB' },
  };

  return (
    <div className="bg-[#F0F8FF] p-4 rounded-md shadow-md mb-4">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={100}
      />
    </div>
  );
};

export default SparklineChart;
