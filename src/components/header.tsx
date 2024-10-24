"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`transition-all duration-300 ease-in-out ${
        isHovered ? "bg-white" : "bg-white/50"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                src="/northstar.png"
                alt="North Star Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span
                className={`text-2xl font-bold ${isHovered ? "text-black" : "text-black"}`}
              >
                North Star
              </span>
            </div>
          </Link>
          <nav className="flex-grow">
            <ul className="flex justify-center space-x-6">
              <li key="questionnaire">
                <Link
                  href="/quiz"
                  className={`text-lg font-semibold ${isHovered ? "text-blue-900" : "text-stone-300"} duration-300 hover:text-blue-700`}
                >
                  Questionnaire
                </Link>
              </li>
              <li key="careers">
                <Link
                  href="/careers"
                  className={`text-lg font-semibold ${isHovered ? "text-blue-900" : "text-stone-300"} duration-300 hover:text-blue-700`}
                >
                  Careers
                </Link>
              </li>
              <li key="courses">
                <Link
                  href="/courses"
                  className={`text-lg font-semibold ${isHovered ? "text-blue-900" : "text-stone-300"} duration-300 hover:text-blue-700`}
                >
                  Courses
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
