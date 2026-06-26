"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaPlus, FaEdit, FaChartBar, FaSignOutAlt, FaBookmark, FaHistory } from "react-icons/fa";

export default function CreatorDashboard() {
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
                  <p className="text-sm text-base-content/70">{session.user.email}</p>
                  <div className="badge badge-primary mt-2">Creator</div>
                  <div className="badge badge-secondary mt-1">{session.user.subscription}</div>
                </div>

                <div className="divider"></div>

                <ul className="menu menu-vertical bg-base-200 rounded-box">
                  <li>
                    <a className="active">
                      <FaChartBar className="mr-2" />
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaPlus className="mr-2" />
                      Create Prompt
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaEdit className="mr-2" />
                      My Prompts
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
                <div className="flex justify-between items-center mb-4">
                  <h2 className="card-title text-2xl">Creator Dashboard</h2>
                  <button className="btn btn-primary">
                    <FaPlus className="mr-2" />
                    Create New Prompt
                  </button>
                </div>
                <p className="text-base-content/70">
                  Manage your prompts and track their performance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Total Prompts</div>
                  <div className="stat-value text-primary">24</div>
                  <div className="stat-desc">Published</div>
                </div>
              </div>
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Total Copies</div>
                  <div className="stat-value text-secondary">1.2K</div>
                  <div className="stat-desc">All time</div>
                </div>
              </div>
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Avg Rating</div>
                  <div className="stat-value text-accent">4.5</div>
                  <div className="stat-desc">Out of 5</div>
                </div>
              </div>
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Total Views</div>
                  <div className="stat-value">5.8K</div>
                  <div className="stat-desc">This month</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">My Prompts</h3>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Prompt Title</th>
                        <th>Category</th>
                        <th>Copies</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AI Content Writer</td>
                        <td>Marketing</td>
                        <td>456</td>
                        <td>4.8</td>
                        <td><span className="badge badge-success">Published</span></td>
                        <td>
                          <button className="btn btn-sm btn-ghost">Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Code Review Assistant</td>
                        <td>Coding</td>
                        <td>234</td>
                        <td>4.5</td>
                        <td><span className="badge badge-success">Published</span></td>
                        <td>
                          <button className="btn btn-sm btn-ghost">Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Image Generator</td>
                        <td>Design</td>
                        <td>123</td>
                        <td>4.2</td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>
                          <button className="btn btn-sm btn-ghost">Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
