import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="form-control w-full">
      <div className="input-group flex gap-2">
        <input
          type="text"
          placeholder="Search by title, tags, or AI tool..."
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
