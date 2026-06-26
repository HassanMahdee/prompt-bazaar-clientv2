import SearchBar from "./searchBar";
import FilterBar from "./filterBar";
import SortBar from "./sortBar";
import PromptCard from "./promptCard";

export default function AllPrompts() {
  return (
    <div className="container-xy">
      <h1 className="section-title">All Prompts</h1>
      
      {/* Search, Filter, and Sort Section */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8 justify-between">
        <div className="flex ">
          <SearchBar />
        </div>
        <div className="flex gap-4">
          <FilterBar />
          <SortBar />
        </div>
      </div>

      {/* Prompts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
      </div>
    </div>
  );
}
