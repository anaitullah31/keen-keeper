import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#245b4b]">404</h1>
        <p className="mt-2 text-xl font-semibold text-slate-700">
          Page Not Found
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Looks like this friendship link is broken. The page you are looking
          for does not exist or has been moved.
        </p>

        <button className="mt-6 rounded-md bg-[#245b4b] px-4 py-2 text-white hover:bg-[#1f4d40]">
          <Link href="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
}
