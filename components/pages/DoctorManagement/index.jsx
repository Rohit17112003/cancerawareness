


"use client";

import { useRouter } from "next/navigation";
import { RiStarFill } from "react-icons/ri";

const doctorData = [
  {
    name: "Dr. Rohit Kumar",
    speciality: "Oncologist",
    experience: "10+ years in cancer treatment",
    review: "Excellent care provided to patients.",
    avatar: "/image/awatar.svg",
    rating: 5,
  },
  {
    name: "Dr. Sourav Singh",
    speciality: "Radiologist",
    experience: "8 years of experience in diagnostics",
    review: "Very calm and knowledgeable.",
    avatar: "/image/awatar.svg",
    rating: 4,
  },
];

const DoctorManagement = () => {
  const router = useRouter();

  const handleAddDoctorClick = () => {
    router.push("/doctor-management-form");
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
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full border border-gray-300 px-4 text-sm flex items-center gap-2">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search here..."
            className="w-[150px] rounded-lg px-1 py-2 focus:outline-none md:w-[250px]"
          />
        </span>

        <button
          onClick={handleAddDoctorClick}
          className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
        <span><i className="ri-add-fill pr-1"></i></span>
          Add New Doctor
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-sm">
        <table className="w-full text-left text-sm bg-white rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="px-4 py-3">Avatar</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Speciality</th>
              <th className="px-4 py-3">Experience</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Review</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctorData.map((doctor, idx) => (
              <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-2">{doctor.name}</td>
                <td className="px-4 py-2">{doctor.speciality}</td>
                <td className="px-4 py-2">{doctor.experience}</td>
                <td className="px-4 py-2">{renderStars(doctor.rating)}</td>
                <td className="px-4 py-2">{doctor.review}</td>
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
