"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function PromptDetailPage({ params }) {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="container-xy">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl mb-4">
              AI Prompt for Content Writing
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge badge-primary">ChatGPT</span>
              <span className="badge badge-secondary">Marketing</span>
              <span className="badge badge-accent">Beginner</span>
            </div>

            <div className="flex items-center gap-4 mb-6 text-sm">
              <div className="flex items-center gap-1">
                <span className="font-semibold">Creator:</span>
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">Rating:</span>
                <span>4.5/5</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">Copies:</span>
                <span>1,234</span>
              </div>
            </div>

            <div className="divider"></div>

            <h2 className="text-xl font-semibold mb-3">Prompt Content</h2>
            <div className="bg-base-200 p-4 rounded-lg mb-6">
              <p className="whitespace-pre-wrap">
                Act as a professional content writer. Create a compelling blog post about [topic] that engages readers and provides valuable insights. The post should be approximately 1000 words, include a catchy headline, and have a clear call-to-action at the end.
              </p>
            </div>

            <div className="divider"></div>

            <h2 className="text-xl font-semibold mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="badge badge-outline">content-writing</span>
              <span className="badge badge-outline">blogging</span>
              <span className="badge badge-outline">marketing</span>
              <span className="badge badge-outline">seo</span>
            </div>

            <div className="card-actions justify-end gap-2">
              <button className="btn btn-primary">
                Copy Prompt
              </button>
              <button className="btn btn-outline">
                Save to Favorites
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="space-y-4">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-2">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <span>JD</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Jane Doe</h3>
                    <div className="flex text-yellow-500 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="text-sm">This prompt works amazingly well! Highly recommend for content creators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
