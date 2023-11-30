import Link from "next/link";

// Define the Footer function
export default function Footer() {
  return (
    <div className="w-full px-6 border-t border-t-gray-700 py-2 text-center">
      Check more projects on my site {" "}
      <Link
        href="https://dani3.com/"
        target="_blank"
        className="text-blue-500 hover:text-blue-600"
      >
        Dani3.com
      </Link>
      !
    </div>
  );
}