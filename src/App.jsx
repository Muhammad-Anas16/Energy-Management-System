import "./App.css";
import FilterPenal from "./components/filterPenal";
import Navbar from "./components/navbar";
import TitleHeader from "./components/titleHeader";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#070b0a] text-[#dde4dd] overflow-x-hidden">
      <Navbar />
      <main className="px-4">
        <TitleHeader />
        <FilterPenal />
      </main>
    </div>
  );
}

export default App;
