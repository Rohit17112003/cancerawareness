"use client";
import Button from "@/components/atoms/Button";

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
        <RiStarFill key={i} className="inline-block text-lg text-yellow-400" />
      ));
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-1">
        <span className="flex items-center gap-2 rounded-full border border-gray-300 px-4 text-sm">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search doctor..."
            className="w-[150px] rounded-lg px-1 py-2 focus:outline-none md:w-[250px]"
          />
        </span>

        <Button value="Add New Doctor" onClick={handleAddDoctorClick} />
      </div>

      <div className="overflow-x-auto rounded-xl shadow-sm">
        <table className="w-full overflow-hidden rounded-xl bg-white text-left text-sm">
          <thead className="text-primary bg-gray-100">
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
              <tr
                key={idx}
                className="text-peracolor border-b border-gray-200 hover:bg-gray-50"
              >
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

export default DoctorManagement;
