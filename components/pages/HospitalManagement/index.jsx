"use client";

import { useRouter } from "next/navigation";


const seriesData = [
  {
    name: "Inraprastha Apollo Hospital",
    address: "What is the write time to being somehitng.",
    rating: "⭐⭐⭐⭐⭐",
    review: "N/A",
  },
  {
    name: "Inraprastha Apollo Hospital",
    address: "What is the write time to being somehitng.",
    rating: "⭐⭐⭐⭐⭐",
    review: "N/A",
  },
];

const HospitalManagement = () => {
  const router = useRouter ();
  const handleHospitalManagementForm= () =>{
    router.push("/hospital-management-form");
  };
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full border border-gray-300 px-4 text-sm">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search here..."
            className="w-[150px] rounded-lg px-1 py-2 focus:outline-none md:w-[250px]"
          />
        </span>

        <button onClick={handleHospitalManagementForm} className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
          Add New Hospital 
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white text-left text-sm">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="rounded-tl-lg rounded-bl-lg px-4 py-3">Name</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Review</th>
              <th className="rounded-tr-lg rounded-br-lg px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {seriesData.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.address}</td>
                <td className="px-4 py-2">{item.rating}</td>
                <td className="px-4 py-2">{item.review}</td>

                <td className="px-4 py-2">
                  <div className="text-md flex items-center gap-2">
                    <i className="ri-edit-box-line cursor-pointer text-black"></i>
                    <i className="ri-delete-bin-5-line cursor-pointer text-red-500"></i>
                   
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HospitalManagement;
