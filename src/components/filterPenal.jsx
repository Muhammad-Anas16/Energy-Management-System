import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterPenal = () => {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 17),
    to: new Date(2024, 0, 24),
  });

  const [quickSelect, setQuickSelect] = useState("1H");

  const handleApplyFilters = () => {
    console.log({
      dateRange,
      quickSelect,
    });
  };

  return (
    <div className="w-full rounded-xl border border-white/10 bg-[#0e1511]/80 p-5 md:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase text-[#bbcabf]">
              Date Range
            </p>

            <Popover className="text-white">
              <PopoverTrigger className="flex w-full items-center justify-start gap-3 rounded-md border border-white/10 bg-[#080d0a] px-4 py-2 text-white hover:bg-white/5 sm:w-full">
                <CalendarIcon className="size-4 text-[#4edea3]" />
                {dateRange?.from ? (
                  <>
                    {format(dateRange.from, "yyyy-MM-dd")}
                    <span className="text-[#bbcabf]">—</span>
                    {dateRange.to
                      ? format(dateRange.to, "yyyy-MM-dd")
                      : "Select date"}
                  </>
                ) : (
                  "Select date range"
                )}
              </PopoverTrigger>

              <PopoverContent
                className="w-auto border-white/10 bg-[#0e1511] p-0"
                align="start"
              >
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase text-[#bbcabf]">
              Quick Select
            </p>

            <Select value={quickSelect} onValueChange={setQuickSelect}>
              <SelectTrigger className="w-full border-white/10 bg-[#080d0a] text-white sm:w-[150px]">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>

              <SelectContent className="border-white/10 bg-[#0e1511] text-white">
                <SelectItem value="1H">1 Hour</SelectItem>
                <SelectItem value="24H">24 Hours</SelectItem>
                <SelectItem value="7D">7 Days</SelectItem>
                <SelectItem value="30D">30 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleApplyFilters}
          className="w-full gap-2 bg-[#4edea3] text-black hover:bg-[#4edea3]/90 sm:w-auto cursor-pointer"
        >
          <Search className="size-4" />
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPenal;
