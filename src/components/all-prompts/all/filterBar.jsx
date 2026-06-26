import { FaFilter } from "react-icons/fa";

export default function FilterBar() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-outline">
        <FaFilter className="mr-2" />
        Filters
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-72 p-4 shadow-lg border border-base-300"
      >
        <li className="menu-title">Category</li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Marketing
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Writing
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Coding
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Design
          </label>
        </li>
        
        <li className="menu-title mt-2">AI Tool</li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            ChatGPT
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Claude
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Gemini
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Midjourney
          </label>
        </li>
        
        <li className="menu-title mt-2">Difficulty Level</li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Beginner
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Intermediate
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs mr-2" />
            Advanced
          </label>
        </li>
      </ul>
    </div>
  );
}
