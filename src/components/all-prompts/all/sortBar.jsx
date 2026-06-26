import { FaSort } from "react-icons/fa";

export default function SortBar() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-outline">
        <FaSort className="mr-2" />
        Sort By
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg border border-base-300"
      >
        <li>
          <label className="cursor-pointer">
            <input type="radio" name="sort" className="radio radio-xs radio-primary mr-2" />
            Most Popular (Rating)
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="radio" name="sort" className="radio radio-xs radio-primary mr-2" />
            Most Copied
          </label>
        </li>
        <li>
          <label className="cursor-pointer">
            <input type="radio" name="sort" className="radio radio-xs radio-primary mr-2" />
            Latest
          </label>
        </li>
      </ul>
    </div>
  );
}
