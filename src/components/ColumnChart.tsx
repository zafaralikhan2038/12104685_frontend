import ReactApexChart from "react-apexcharts";

const ColumnChart = ({ data }) => {
  const totalVisitorsOverall = data.reduce(
    (acc, item) =>
      acc + (+item.adults || 0) + (+item.children || 0) + (+item.babies || 0),
    0
  );

  const countryData = data.reduce((acc, item) => {
    const totalVisitors =
      (+item.adults || 0) + (+item.children || 0) + (+item.babies || 0);

    acc[item.country] = (acc[item.country] || 0) + totalVisitors;
    return acc;
  }, {});

  const percentages = Object.values(countryData).map((value) =>
    ((value / totalVisitorsOverall) * 100).toFixed(2)
  );

  const series = [
    {
      name: "Visitors (%)",
      data: percentages,
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    xaxis: {
      categories: Object.keys(countryData),
      labels: {
        style: { colors: "#374151" },
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}%`,
        style: {
          colors: "#374151",
        },
      },
    },
    colors: ["#F59E0B"],
    title: {
      align: "center",
      style: { color: "#1E3A8A" },
    },
    grid: {
      borderColor: "#E5E7EB",
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      style: {
        colors: ["#000"],
      },
    },
  };

  return (
    <div className="bg-[#F0F8FF] p-4 rounded-md shadow-md">
      <h3 className="text-center mt-4 text-[#1E40AF] font-bold">
        Visitors by Country
      </h3>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
