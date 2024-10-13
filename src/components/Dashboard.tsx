/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import DateSelector from "./DateSelector";
import TimeSeriesChart from "./TimeSeriesChart";
import ColumnChart from "./ColumnChart";
import SparklineChart from "./SparklineChart";

function Dashboard() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("/assets/hotel_bookings_1000.json")
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDateChange = (start: Date | null, end: Date | null) => {
    if (start && end) {
      const filtered = data.filter((item) => {
        const bookingDate = new Date(
          `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`
        );
        return bookingDate >= start && bookingDate <= end;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="p-6 bg-[#F0F8FF] min-h-screen">
      <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-950">Hotel Booking Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="mb-6">
            <DateSelector onDateChange={handleDateChange} />
          </div>
          <div className="space-y-4">
            <SparklineChart
              data={filteredData.map((d) => d.adults)}
              label="Adult Visitors"
            />
            <SparklineChart
              data={filteredData.map((d) => d.children)}
              label="Children Visitors"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <TimeSeriesChart data={filteredData} />
          <ColumnChart data={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
