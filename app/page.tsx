"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const logo: string[] = ["T", "R", "E", "K", "K", "A"];
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTagline(true), logo.length * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">

      <div className="absolute top-1/2 translate-y-[50%] space-y-6 flex flex-col justify-center items-center w-full">

        {/* Logo */}
        <h2 className="flex space-x-1 text-center">
          {logo.map((el, index) => (
            <span
              key={index}
              className="text-2xl font-bold text-gray-800 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index}s` }}
            >
              {el}
            </span>
          ))}
        </h2>

        {/* Tagline */}
        {showTagline && (
          <p className="text-gray-500 text-sm text-center animate-fadeInSlow">
            "... inbuilt AI-driven journey made easy"
          </p>
        )}

        {/* Action Button */}
        {showTagline && (
          <div className="block rounded-full border border-gray-700 h-10 flex items-center justify-between p-1 w-1/2 animate-fadeInSlow">
            <span className="rounded-full inline-block py-1 px-1.5 bg-gray-700 text-white font-bold">
              Go 🔥
            </span>

            <span className="inline-block bg-gray-200 rounded-full py-1 px-4 font-bold flex items-center justify-center">
              &rarr;
            </span>
          </div>
        )}
      </div>

    </div>
  );
}
