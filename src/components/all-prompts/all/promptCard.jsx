import Link from "next/link";
import { FaCopy, FaEye, FaStar } from "react-icons/fa";

export default function PromptCard() {
  return (
    <div className="card card-border bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
      <div className="card-body">
        <div className="flex justify-between items-start mb-2">
          <h2 className="card-title text-lg font-semibold">
            AI Prompt for Content Writing
          </h2>
          <div className="badge badge-primary">ChatGPT</div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="badge badge-secondary badge-sm">Marketing</span>
          <span className="badge badge-accent badge-sm">Beginner</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-base-content/70 mb-4">
          <div className="flex items-center gap-1">
            <FaCopy />
            <span>1,234</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span>4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span className="text-xs">JD</span>
            </div>
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </div>

        <div className="card-actions justify-end">
          <Link href="/prompts/1" className="btn btn-primary btn-sm">
            <FaEye className="mr-2" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
