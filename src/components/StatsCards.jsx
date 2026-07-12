import { Bolt, Gauge, TriangleAlert } from "lucide-react";
import Charts from "./charts";

const StatsCards = () => {
  return (
    <section className="w-full">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <Charts
          title="Total Energy"
          value="124.5"
          unit="MWh"
          color="#4edea3"
          trend="-4.2%"
          icon={<Bolt size={22} />}
          chartData={[
            { value: 10 },
            { value: 18 },
            { value: 5 },
            { value: 25 },
            { value: 15 },
            { value: 28 },
          ]}
        />

        <Charts
          title="AVG Power"
          value="842"
          unit="kW"
          color="#9CA3AF"
          trend="-1.8%"
          icon={<Gauge size={22} />}
          chartData={[
            { value: 22 },
            { value: 20 },
            { value: 24 },
            { value: 17 },
            { value: 22 },
            { value: 18 },
          ]}
        />

        <Charts
          title="Peak Demand"
          value="1240"
          unit="kW"
          color="#FCA5A5"
          trend="-8.5%"
          icon={<TriangleAlert size={22} />}
          chartData={[
            { value: 3 },
            { value: 5 },
            { value: 6 },
            { value: 20 },
            { value: 12 },
            { value: 10 },
          ]}
        />

        {/* Future cards */}
        {/* <Charts ... /> */}
      </div>
    </section>
  );
};

export default StatsCards;
