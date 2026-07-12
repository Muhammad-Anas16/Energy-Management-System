import { useId } from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingDown } from "lucide-react";

const Charts = ({
  title = "Total Energy",
  value = "124.5",
  unit = "MWh",
  color = "#4edea3",
  trend = "-4.2%",
  icon = null,
  chartData = [
    { value: 18 },
    { value: 25 },
    { value: 12 },
    { value: 32 },
    { value: 22 },
    { value: 36 },
  ],
}) => {
  const gradientId = useId();

  return (
    <div className="group min-w-0 rounded-2xl border border-white/5 bg-[#101714] p-4 sm:p-5 xl:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 m-2">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11"
          style={{
            backgroundColor: `${color}20`,
            color,
          }}
        >
          {icon}
        </div>

        {trend && (
          <div
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold whitespace-nowrap"
            style={{
              backgroundColor: `${color}15`,
              color,
            }}
          >
            <TrendingDown size={13} />
            {trend}
          </div>
        )}
      </div>

      {/* Title */}
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
        {title}
      </p>

      {/* Value */}
      <div className="mt-2 flex flex-wrap items-end gap-2">
        <span className="text-3xl font-bold leading-none text-white sm:text-4xl xl:text-5xl">
          {value}
        </span>

        <span className="pb-1 text-base text-zinc-400 sm:text-lg">{unit}</span>
      </div>

      {/* Chart */}
      <div className="mt-5 h-16 sm:h-20 border-t border-white/5 pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.35} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              fill={`url(#${gradientId})`}
              dot={false}
              activeDot={false}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
