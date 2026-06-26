"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaBookmark, FaHistory, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function UserDashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  if (!session) {
    return null;
  }

  return (
    <div className="container-xy">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex flex-col items-center mb-6">
                  <div className="avatar placeholder mb-3">
                    <div className="bg-neutral text-neutral-content rounded-full w-20">
                      <span className="text-2xl">
                        {session.user.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold">{session.user.name}</h2>
                  <p className="text-sm text-base-content/70">
                    {session.user.email}
                  </p>
                  <div className="badge badge-primary mt-2">
                    {session.user.role}
                  </div>
                  <div className="badge badge-secondary mt-1">
                    {session.user.subscription}
                  </div>
                </div>

                <div className="divider"></div>

                <ul className="menu menu-vertical bg-base-200 rounded-box">
                  <li>
                    <a className="active">
                      <FaUser className="mr-2" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaBookmark className="mr-2" />
                      Saved Prompts
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaHistory className="mr-2" />
                      History
                    </a>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-error">
                      <FaSignOutAlt className="mr-2" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="card bg-base-100 shadow-lg mb-6">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  Welcome back, {session.user.name}!
                </h2>
                <p className="text-base-content/70">
                  Here&apos;s an overview of your activity on Prompt Bazaar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Saved Prompts</div>
                  <div className="stat-value text-primary">12</div>
                  <div className="stat-desc">Total saved</div>
                </div>
              </div>
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Copied Prompts</div>
                  <div className="stat-value text-secondary">45</div>
                  <div className="stat-desc">This month</div>
                </div>
              </div>
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Reviews Given</div>
                  <div className="stat-value text-accent">8</div>
                  <div className="stat-desc">Total reviews</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">
                  Recently Saved Prompts
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div>
                      <h4 className="font-semibold">
                        AI Content Writer Prompt
                      </h4>
                      <p className="text-sm text-base-content/70">
                        ChatGPT • Marketing
                      </p>
                    </div>
                    <button className="btn btn-sm btn-outline">View</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Code Review Assistant</h4>
                      <p className="text-sm text-base-content/70">
                        Claude • Coding
                      </p>
                    </div>
                    <button className="btn btn-sm btn-outline">View</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Image Generation Prompt</h4>
                      <p className="text-sm text-base-content/70">
                        Midjourney • Design
                      </p>
                    </div>
                    <button className="btn btn-sm btn-outline">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
