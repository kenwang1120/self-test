import MemoryCard from "./components/MemoryCard";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6f8] p-6">
      <div className="w-[600px] h-[260px]">
        <MemoryCard />
      </div>
    </div>
  );
}