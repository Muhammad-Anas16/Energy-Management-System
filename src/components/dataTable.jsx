import { Database } from "lucide-react";

const DataTable = ({ data = [] }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#101714] transition-all duration-300 hover:border-[#4edea3]/20">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-[#161d19] px-5 py-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-[#dde4dd]">
          <Database size={20} className="text-[#4edea3]" />
          Departmental Telemetry
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 border-b border-white/10 bg-[#0A0F0D]">
            <tr>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#bbcabf]">
                Department
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#bbcabf]">
                Power (kW)
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#bbcabf]">
                Energy (kWh)
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#bbcabf]">
                PF (%)
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#bbcabf]">
                Eff (%)
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#bbcabf]">
                Status
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#bbcabf]">
                Trend
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {data.map((row, index) => (
              <tr
                key={index}
                className="group transition-all duration-200 hover:bg-white/[0.03]"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-white/5 text-xs font-semibold text-[#bbcabf] transition-colors group-hover:bg-[#4edea3]/10 group-hover:text-[#4edea3]">
                      {row.department.charAt(0)}
                    </div>

                    <span className="text-sm text-[#dde4dd]">
                      {row.department}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 text-right text-sm text-[#dde4dd]">
                  {row.power}
                </td>

                <td className="px-5 py-4 text-right text-sm text-[#dde4dd]">
                  {row.energy}
                </td>

                <td className="px-5 py-4 text-right text-sm text-[#dde4dd]">
                  {row.pf}
                </td>

                <td className="px-5 py-4 text-right text-sm text-[#dde4dd]">
                  {row.eff}
                </td>

                <td className="px-5 py-4 text-center">
                  <span
                    className={`rounded-full border px-2 py-1 text-[11px] font-medium uppercase ${
                      row.status === "Normal"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        : row.status === "Warning"
                          ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                          : "border-red-500/20 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <svg
                    className="mx-auto h-6 w-20"
                    preserveAspectRatio="none"
                    viewBox="0 0 60 20"
                  >
                    <path
                      d={row.trend}
                      fill="none"
                      stroke={row.trendColor || "#4edea3"}
                      strokeWidth="2"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
