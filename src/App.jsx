import "./App.css";
import Navbar from "./components/navbar";
import TitleHeader from "./components/titleHeader";
import FilterPenal from "./components/filterPenal";
import StatsCards from "./components/StatsCards";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#070b0a] text-[#dde4dd] overflow-x-hidden">
      <Navbar />
      <main className="px-4 flex flex-col gap-5">
        <TitleHeader />
        <FilterPenal />
        <StatsCards />
        <DataTable />
      </main>
    </div>
  );
}

export default App;
