// "use client";

// import { useState } from "react";
// import { RiEdit2Line, RiDeleteBinLine, RiAddLine } from "react-icons/ri";

// const initialServices = [
//   {
//     id: 1,
//     name: "Cancer Screening",
//     description: "Early detection through regular screening tests.",
//     duration: "30 mins",
//   },
//   {
//     id: 2,
//     name: "Counseling",
//     description: "Support and guidance for patients and families.",
//     duration: "45 mins",
//   },
//   {
//     id: 3,
//     name: "Awareness Programs",
//     description: "Community education and preventive measures.",
//     duration: "Varies",
//   },
// ];

// const ServiceManagement = () => {
//   const [services, setServices] = useState(initialServices);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter services based on search term
//   const filteredServices = services.filter((service) =>
//     service.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Delete service handler
//   const handleDelete = (id) => {
//     if (confirm("Are you sure you want to delete this service?")) {
//       setServices(services.filter((service) => service.id !== id));
//     }
//   };

//   return (
//     <>
//       <div className="mx-auto max-w-5xl p-6">
//       <header className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-pink-700">Manage Services</h1>
//           <p className="text-gray-600 mt-1">
//             Add, update, or remove cancer awareness services
//           </p>
//         </div>

//         <div className="flex gap-4 items-center">
//           <input
//             type="text"
//             placeholder="Search services..."
//             className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />

//           <button
//             className="flex items-center gap-1 rounded-lg bg-pink-600 md:px-4 py-2 px-2 text-white transition hover:bg-pink-700"
//             // onClick={() => open your add form modal/page}
//           >
//             <RiAddLine size={20} />
//             Add New Service
//           </button>
//         </div>
//       </header>

//       <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
//         <table className="w-full text-left text-sm bg-white">
//           <thead className="bg-pink-100 text-pink-700">
//             <tr>
//               <th className="px-5 py-3 rounded-tl-lg">Service Name</th>
//               <th className="px-5 py-3">Description</th>
//               <th className="px-5 py-3">Duration</th>
//               <th className="px-5 py-3 rounded-tr-lg">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredServices.length > 0 ? (
//               filteredServices.map(({ id, name, description, duration }) => (
//                 <tr
//                   key={id}
//                   className="border-b border-gray-200 hover:bg-pink-50 transition"
//                 >
//                   <td className="px-5 py-3 font-medium">{name}</td>
//                   <td className="px-5 py-3">{description}</td>
//                   <td className="px-5 py-3">{duration}</td>
//                   <td className="px-5 py-3">
//                     <div className="flex gap-3 text-lg text-pink-600">
//                       <button
//                         title="Edit Service"
//                         className="hover:text-pink-800"
//                         // onClick={() => open edit modal/page with id}
//                       >
//                         <RiEdit2Line />
//                       </button>
//                       <button
//                         title="Delete Service"
//                         className="hover:text-red-600"
//                         onClick={() => handleDelete(id)}
//                       >
//                         <RiDeleteBinLine />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="4"
//                   className="text-center py-8 text-gray-500 italic"
//                 >
//                   No services found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// };

// export default ServiceManagement;



"use client";

import { useState } from "react";
import { RiEdit2Line, RiDeleteBinLine, RiAddLine, RiSearchLine } from "react-icons/ri";

const initialServices = [
  {
    id: 1,
    name: "Cancer Screening",
    description: "Early detection through regular screening tests.",
    duration: "30 mins",
  },
  {
    id: 2,
    name: "Counseling",
    description: "Support and guidance for patients and families.",
    duration: "45 mins",
  },
  {
    id: 3,
    name: "Awareness Programs",
    description: "Community education and preventive measures.",
    duration: "Varies",
  },
];

const ServiceManagement = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter services based on search term
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete service handler
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="mx-auto py-6">
      <header className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-pink-700">Manage Services</h1>
          <p className="text-gray-600 mt-1">
            Add, update, or remove cancer awareness services
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search services..."
              className="rounded-full border border-gray-300 pl-9 pr-4 text-sm md:text-md py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            className="flex items-center gap-1 rounded-md bg-pink-600 md:px-4 text-sm md:text-md py-2 px-2 text-white transition hover:bg-pink-700 cursor-pointer"
            // onClick={() => open your add form modal/page}
          >
            <RiAddLine size={18} />
            Add New Service
          </button>
        </div>
      </header>

      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <table className="w-full text-left text-sm bg-white">
          <thead className="bg-pink-100 text-pink-700">
            <tr>
              <th className="px-5 py-3 rounded-tl-lg">Service Name</th>
              <th className="px-5 py-3">Description</th>
              <th className="px-5 py-3">Duration</th>
              <th className="px-5 py-3 rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.length > 0 ? (
              filteredServices.map(({ id, name, description, duration }) => (
                <tr
                  key={id}
                  className="border-b border-gray-200 hover:bg-pink-50 transition"
                >
                  <td className="px-5 py-3 font-medium">{name}</td>
                  <td className="px-5 py-3">{description}</td>
                  <td className="px-5 py-3">{duration}</td>
                  <td className="px-5 py-3">
                    <div className="flex gap-3 text-lg text-pink-600">
                      <button
                        title="Edit Service"
                        className="hover:text-pink-900 text-green-800 cursor-pointer"
                        // onClick={() => open edit modal/page with id}
                      >
                        <RiEdit2Line />
                      </button>
                      <button
                        title="Delete Service"
                        className="hover:text-red-700 text-red-500 cursor-pointer"
                        onClick={() => handleDelete(id)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-8 text-gray-500 italic"
                >
                  No services found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceManagement;
