"use client";
import Button from "@/components/atoms/Button";

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
        <RiStarFill key={i} className="inline-block text-lg text-yellow-400" />
      ));
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-1.5">
        <span className="flex items-center gap-2 rounded-full border border-gray-300 px-4 text-sm">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search hospital..."
            className="w-[150px] rounded-lg px-1 py-2 focus:outline-none md:w-[250px]"
          />
        </span>
        <Button
          value="Add New Hospital"
          onClick={handleHospitalManagementForm}
        />
      </div>

      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="w-full bg-white text-left text-sm">
          <thead className="text-primary bg-gray-200">
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
              <tr
                key={idx}
                className="text-peracolor border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.address}</td>
                <td className="px-4 py-3">{renderStars(item.rating)}</td>
                <td className="px-4 py-3">{item.review}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-lg">
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
