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
      <div className="container mx-auto py-4">
        <div className="flex items-center">
          <div className="w-1/3">
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
          </div>
          <nav className="mx-auto flex flex-grow items-center justify-center">
            <ul className="flex justify-center space-x-6">
              <li key="questionnaire">
                <Link
                  href="/quiz"
                  className={`text-lg ${isHovered ? "font-semibold text-blue-900" : "text-stone-400"} duration-300 hover:text-blue-700`}
                >
                  Questionnaire
                </Link>
              </li>
              <li key="careers" className="flex-grow text-center">
                <Link
                  href="/careers"
                  className={`text-lg ${isHovered ? "font-semibold text-blue-900" : "text-stone-400"} duration-300 hover:text-blue-700`}
                >
                  Careers
                </Link>
              </li>
              <li key="courses">
                <Link
                  href="/courses"
                  className={`text-lg ${isHovered ? "font-semibold text-blue-900" : "text-stone-400"} duration-300 hover:text-blue-700`}
                >
                  Courses
                </Link>
              </li>
            </ul>
          </nav>
          <div className="w-1/3"></div>
        </div>
      </div>
    </header>
  );
}
