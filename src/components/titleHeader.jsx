import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

const TitleHeader = () => {
  return (
    <div className="w-full flex items-center justify-between py-4">
      <div className="flex flex-col">
        <h1 className="text-2xl capitalize font-bold">energy report</h1>
        <p className="text-sm">
          Comprehensive analysis and telemetry overview.
        </p>
      </div>
      <Button className="capitalize bg-[#0e1511]/80 border border-white/10 flex items-center justify-center gap-3 rounded-full cursor-pointer">
        <RotateCw />
        refresh data
      </Button>
    </div>
  );
};

export default TitleHeader;
