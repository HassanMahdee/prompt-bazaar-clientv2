"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaUsers, FaShieldAlt, FaChartBar, FaSignOutAlt, FaClipboardList, FaCog } from "react-icons/fa";

export default function AdminDashboard() {
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
      <div className="max-w-7xl mx-auto">
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
                  <div className="badge badge-error mt-2">Admin</div>
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
                      <FaUsers className="mr-2" />
                      User Management
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaClipboardList className="mr-2" />
                      Prompt Moderation
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaShieldAlt className="mr-2" />
                      Role Management
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaCog className="mr-2" />
                      Settings
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
                <h2 className="card-title text-2xl">Admin Dashboard</h2>
                <p className="text-base-content/70">
                  Overview of platform statistics and administrative controls.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Total Users</div>
                  <div className="stat-value text-primary">1,234</div>
                  <div className="stat-desc">Registered</div>
                </div>
              </div>
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Total Prompts</div>
                  <div className="stat-value text-secondary">5,678</div>
                  <div className="stat-desc">Published</div>
                </div>
              </div>
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Pending Review</div>
                  <div className="stat-value text-accent">23</div>
                  <div className="stat-desc">Need approval</div>
                </div>
              </div>
              <div className="stats shadow bg-base-100">
                <div className="stat">
                  <div className="stat-title">Active Sessions</div>
                  <div className="stat-value">89</div>
                  <div className="stat-desc">Currently online</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">Recent Users</h3>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John Doe</td>
                          <td>john@example.com</td>
                          <td><span className="badge badge-primary">User</span></td>
                          <td><span className="badge badge-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Jane Smith</td>
                          <td>jane@example.com</td>
                          <td><span className="badge badge-secondary">Creator</span></td>
                          <td><span className="badge badge-success">Active</span></td>
                        </tr>
                        <tr>
                          <td>Bob Johnson</td>
                          <td>bob@example.com</td>
                          <td><span className="badge badge-primary">User</span></td>
                          <td><span className="badge badge-warning">Pending</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">Pending Prompts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Marketing Strategy Prompt</h4>
                        <p className="text-sm text-base-content/70">By: Alice Brown</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="btn btn-sm btn-success">Approve</button>
                        <button className="btn btn-sm btn-error">Reject</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Code Generator Prompt</h4>
                        <p className="text-sm text-base-content/70">By: Charlie Wilson</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="btn btn-sm btn-success">Approve</button>
                        <button className="btn btn-sm btn-error">Reject</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Creative Writing Prompt</h4>
                        <p className="text-sm text-base-content/70">By: Diana Prince</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="btn btn-sm btn-success">Approve</button>
                        <button className="btn btn-sm btn-error">Reject</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">Platform Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">New Users (This Week)</div>
                    <div className="stat-value text-lg">+45</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">New Prompts (This Week)</div>
                    <div className="stat-value text-lg">+128</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Total Copies (This Week)</div>
                    <div className="stat-value text-lg">+2.3K</div>
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
