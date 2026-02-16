"use client";


import { useState, useEffect } from "react";

export default function CaseInformation({ caseInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setIsOpen(desktop); // Always open on desktop
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!caseInfo) return null;

  return (
    <section
      className="mb-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
      aria-labelledby="case-information-heading"
    >
      <div className="p-4">
        {/* Header */}
        <button
          onClick={() => {
            if (!isDesktop) setIsOpen(!isOpen);
          }}
          className="w-full flex justify-between items-center text-left"
        >
          <h2
            id="case-information-heading"
            className="text-lg font-bold"
          >
            Case Information
          </h2>

          {/* Arrow icon (mobile only) */}
          {!isDesktop && (
            <span
              className={`transition-transform duration-200 text-gray-600 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          )}
        </button>

        {/* Content */}
        <div className={`${isOpen ? "block" : "hidden"} mt-3`}>
          {/* Case Meta */}
          <div className="grid md:grid-cols-2 gap-3 mb-3">
            <div>
              <span className="text-sm font-semibold text-gray-600">
                Country/State:
              </span>
              <p className="text-lg">{caseInfo.countryState}</p>
            </div>

            <div>
              <span className="text-sm font-semibold text-gray-600">
                Case Number:
              </span>
              <p className="text-lg">{caseInfo.caseNumber}</p>
            </div>
          </div>

          <hr className="my-3 border-gray-200" />

          {/* Status */}
          <h3 className="text-base font-bold mb-2">Case Status</h3>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-red-100 text-red-800 border-red-300">
                Accusation/Allegation
              </span>
              <p className="text-lg text-gray-700">
                {caseInfo.status?.accusation}
              </p>
            </div>

            <div>
              <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-blue-100 text-blue-800 border-blue-300">
                On Trial
              </span>
              <p className="text-lg text-gray-700">
                {caseInfo.status?.onTrial}
              </p>
            </div>

            <div>
              <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-yellow-100 text-yellow-800 border-yellow-300">
                Current Status
              </span>
              <p className="text-lg text-gray-700">
                {caseInfo.status?.currentStatus}
              </p>
            </div>

            <div>
              <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-green-100 text-green-800 border-green-300">
                Outcome
              </span>
              <p className="text-lg text-gray-700">
                {caseInfo.status?.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
