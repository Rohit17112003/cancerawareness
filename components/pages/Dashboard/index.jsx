"use client";

import {
  RiStethoscopeLine,
  RiHospitalLine,
  RiHeartPulseLine,
  RiTestTubeLine,
} from "react-icons/ri";

const stats = [
  {
    title: "Total Patients",
    count: 324,
    icon: <RiHeartPulseLine size={28} />,
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Doctors",
    count: 25,
    icon: <RiStethoscopeLine size={28} />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Labs",
    count: 12,
    icon: <RiTestTubeLine size={28} />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Services",
    count: 18,
    icon: <RiHospitalLine size={28} />,
    color: "bg-yellow-100 text-yellow-700",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="mx-auto py-6">
        <h1 className="text-primary mb-4 text-xl font-bold md:text-2xl">
          Cancer Awareness
        </h1>
        <p className="text-peracolor mb-8 font-medium">
          Monitor your system activities and manage everything in one place.
        </p>

        {/* Cards Section */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between rounded-xl border border-gray-200 p-4 shadow-md ${item.color}`}
            >
              <div>
                <h2 className="text-sm font-medium">{item.title}</h2>
                <p className="text-xl font-bold">{item.count}</p>
              </div>
              <div>{item.icon}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-primary mb-4 text-lg font-semibold">
            Recent Activity
          </h2>
          <ul className="text-peracolor space-y-3 text-sm font-medium">
            <li>✅ New patient registered at 10:45 AM</li>
            <li>🩺 Dr. Meena updated her schedule</li>
            <li>🧪 Lab results uploaded for ID#1021</li>
            <li>📢 Awareness campaign event scheduled for July 5</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
