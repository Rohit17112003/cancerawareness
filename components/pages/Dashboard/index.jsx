
// "use client";

// import {
//   RiStethoscopeLine,
//   RiHospitalLine,
//   RiHeartPulseLine,
//   RiTestTubeLine,
// } from "react-icons/ri";

// const stats = [
//   {
//     title: "Total Patients",
//     count: 324,
//     icon: <RiHeartPulseLine size={28} />,
//     color: "bg-pink-100 text-pink-700",
//   },
//   {
//     title: "Doctors",
//     count: 25,
//     icon: <RiStethoscopeLine size={28} />,
//     color: "bg-blue-100 text-blue-700",
//   },
//   {
//     title: "Labs",
//     count: 12,
//     icon: <RiTestTubeLine size={28} />,
//     color: "bg-green-100 text-green-700",
//   },
//   {
//     title: "Services",
//     count: 18,
//     icon: <RiHospitalLine size={28} />,
//     color: "bg-yellow-100 text-yellow-700",
//   },
// ];

// const HomePage = () => {
//   const { stats } = data;
//   return (
//   <>
//      <div className="max-w-7xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-pink-700 mb-4">Dashboard Overview</h1>
//       <p className="text-gray-600 mb-8">Monitor your system activities and manage everything in one place.</p>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
//         {stats.map((item, idx) => (
//           <div
//             key={idx}
//             className={`flex items-center justify-between p-4 rounded-xl shadow-md border border-gray-200 ${item.color}`}
//           >
//             <div>
//               <h2 className="text-sm font-medium">{item.title}</h2>
//               <p className="text-xl font-bold">{item.count}</p>
//             </div>
//             <div>{item.icon}</div>
//           </div>
//         ))}
//       </div>

//       {/* Recent Activity */}
//       <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
//         <h2 className="text-lg font-semibold mb-4 text-pink-700">Recent Activity</h2>
//         <ul className="space-y-3 text-sm text-gray-700">
//           <li>✅ New patient registered at 10:45 AM</li>
//           <li>🩺 Dr. Meena updated her schedule</li>
//           <li>🧪 Lab results uploaded for ID#1021</li>
//           <li>📢 Awareness campaign event scheduled for July 5</li>
//         </ul>
//       </div>
//     </div>
//   );
//   </>
//   );
// };

// export default HomePage;



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
      <div className=" mx-auto py-6">
        <h1 className="md:text-2xl text-xl font-bold text-black mb-4">Cancer Awareness</h1>
        <p className="text-gray-600 mb-8">
          Monitor your system activities and manage everything in one place.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-4 rounded-xl shadow-md border border-gray-200 ${item.color}`}
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
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-pink-700">Recent Activity</h2>
          <ul className="space-y-3 text-sm text-gray-700">
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

