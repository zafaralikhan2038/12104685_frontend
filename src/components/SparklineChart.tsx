import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface SparklineChartProps {
  data: number[];
  label: string;
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, label }) => {
  const series = [{ data }];

  const options: ApexOptions = {
    chart: { type: "line", sparkline: { enabled: true } },
    colors: ['#001F3F'],
    title: { text: label, align: "center", offsetX: 10, style: { color: '#059669' } },
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