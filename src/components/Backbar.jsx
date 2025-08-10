"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BackBar() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-around p-5">
      <button
        onClick={() => router.back()}
        className="text-white border border-white px-3 py-1 rounded font-semibold bg-black hover:bg-white hover:text-black transition"
      >
        Previous Page
      </button>

      <Link
        href="/"
        className="text-white border border-white px-3 py-1 rounded font-semibold bg-black hover:bg-white hover:text-black transition"
      >
        Back To Home
      </Link>
    </div>
  );
}
