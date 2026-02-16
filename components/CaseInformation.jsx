"use client";

import { useState, useEffect } from "react";

export default function CaseInformation({ caseInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen + restore state
  useEffect(() => {
    const checkScreen = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      if (desktop) {
        setIsOpen(true); // Always open on desktop
      } else {
        // Restore mobile state
        const savedState = sessionStorage.getItem("caseInfoOpen");
        setIsOpen(savedState === "true");
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Save state when toggled (mobile only)
  const toggleOpen = () => {
    if (!isDesktop) {
      const newState = !isOpen;
      setIsOpen(newState);
      sessionStorage.setItem("caseInfoOpen", newState);
    }
  };

  if (!caseInfo) return null;

  return (
    <section
      className="mb-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
      aria-labelledby="case-information-heading"
    >
      <div className="p-4">
        {/* Header */}
        <button
          onClick={toggleOpen}
          className="w-full flex justify-between items-center text-left"
        >
          <h2 className="text-lg font-bold">
            Case Information
          </h2>

          {/* Arrow (mobile only) */}
          {!isDesktop && (
            <span
              className={`transition-transform duration-200 text-gray-600 ${
                isOpen ? "rotate-180" : ""
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

          <h3 className="text-base font-bold mb-2">Case Status</h3>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <span className="badge-red">Accusation/Allegation</span>
              <p className="text-lg text-gray-700">
                {caseInfo.status?.accusation}
              </p>
            </div>

            <div>
              <span className="badge-blue">On Trial</span>
              <p className="text-lg text-gray-700">
                {caseInfo.status?.onTrial}
              </p>
            </div>

            <div>
              <span className="badge-yellow">Current Status</span>
              <p className="text-lg text-gray-700">
                {caseInfo.status?.currentStatus}
              </p>
            </div>

            <div>
              <span className="badge-green">Outcome</span>
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
