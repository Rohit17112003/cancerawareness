

"use client";

import { useRouter } from "next/navigation";
import { RiStarFill } from "react-icons/ri";

const seriesData = [
  {
    name: "Indraprastha Apollo Hospital",
    address: "Sarita Vihar, Delhi-Mathura Road, New Delhi - 110076",
    rating: 5,
    review: "Top-class infrastructure and experienced doctors.",
  },
  {
    name: "Medanta – The Medicity",
    address: "Sector 38, Gurugram, Haryana - 122001",
    rating: 4,
    review: "Good service and facilities.",
  },
];

const HospitalManagement = () => {
  const router = useRouter();

  const handleHospitalManagementForm = () => {
    router.push("/hospital-management-form");
  };

  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <RiStarFill key={i} className="text-yellow-400 text-lg inline-block" />
      ));
  };

  return (
    <>
      <div className="mb-6 flex gap-1.5 items-center justify-between">
        <span className="flex items-center gap-2 rounded-full border border-gray-300 px-4 text-sm">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search here..."
            className="w-[150px] rounded-lg px-1 py-2 focus:outline-none md:w-[250px]"
          />
        </span>

        <button
          onClick={handleHospitalManagementForm}
          className="cursor-pointer rounded-lg bg-blue-500 md:px-4 px-2 py-2 text-white transition hover:bg-blue-600"
        >
        <span><i className="ri-add-fill pr-1"></i></span>
          Add New Hospital
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl  shadow-md">
        <table className="w-full bg-white text-left text-sm">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Review</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {seriesData.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50 border-b border-gray-200">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.address}</td>
                <td className="px-4 py-3">{renderStars(item.rating)}</td>
                <td className="px-4 py-3">{item.review}</td>
                <td className="px-4 py-3">
                  <div className="text-lg flex items-center gap-2">
                    <i className="ri-edit-2-line cursor-pointer text-green-800"></i>
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

