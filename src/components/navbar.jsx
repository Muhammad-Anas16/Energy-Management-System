import { Dot } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-16 w-full flex items-center justify-between border-b border-white/10 bg-[#0e1511]/80 px-3 sm:px-4 md:px-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
        <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#4edea3] capitalize whitespace-nowrap">
          Eco tech
        </span>

        <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#4edea3]/20 bg-[#4edea3]/10 px-2 sm:px-3 py-1 sm:py-1.5">
          <Dot className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3]" />
          <span className="text-[10px] sm:text-xs font-medium text-[#4edea3] whitespace-nowrap">
            System Online
          </span>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-[#bbcabf] flex items-center whitespace-nowrap">
        Jan 24, 2024
      </div>
    </nav>
  );
};

export default Navbar;
