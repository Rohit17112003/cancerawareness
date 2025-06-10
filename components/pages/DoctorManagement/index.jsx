"use client";

import { useRouter } from "next/navigation";



const seriesData = [
  {
    name: "Doctor Rohit",
    description: "What is the write time to being somehitng.",
    rating: "⭐⭐⭐⭐⭐",
    review: "N/A",
    awatar: "awatar",
    experience: "kesa experience raha bhai",
  },
  {
    name: "Doctor Sourav",
    description: "What is the write time to being somehitng.",
    rating: "⭐⭐⭐⭐⭐",
    review: "N/A",
    awatar: "awatar",
    experience: "kesa experience raha bhai",
  },
];

const DoctorManagement = () => {
  const router=useRouter();
  const handleDoctorManegementForm = () =>{
    router.push("/doctor-management-form");
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

        <button onClick={handleDoctorManegementForm} className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
          Add New Doctor
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white text-left text-sm">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="rounded-tl-lg rounded-bl-lg px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Review</th>
              <th className="px-4 py-3">Awatar</th>
              <th className="px-4 py-3">Experience</th>
              <th className="rounded-tr-lg rounded-br-lg px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {seriesData.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">{item.rating}</td>
                <td className="px-4 py-2">{item.review}</td>
                <td className="px-4 py-2">{item.awatar}</td>
                <td className="px-4 py-2">{item.experience}</td>

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

export default DoctorManagement;
