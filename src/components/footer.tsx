import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/northstar.png"
                alt="Career Planner Logo"
                width={60}
                height={60}
                className="mb-4"
              />
            </Link>
            <p className="text-center text-xl text-gray-600 md:text-left">
              Plan your future career with Career Planner!
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/demo"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Career Planner
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Questionnaire
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8">
          <p className="text-sm text-gray-400">
            North Star • Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
