"use client";
import { useRouter } from "next/navigation";
import { RiSearchLine, RiEdit2Line, RiDeleteBin5Line } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import Button from "@/components/atoms/Button";

const labData = [
  {
    name: "Dr. Lal PathLabs",
    address: "123 Main Street, Delhi",
    rating: 4,
    review: "Good service and clean setup.",
  },
  {
    name: "SRL Diagnostics",
    address: "456 Patel Nagar, Delhi",
    rating: 5,
    review: "Quick reports and accurate results.",
  },
];

const renderStars = (count) => {
  return [...Array(count)].map((_, idx) => (
    <AiFillStar key={idx} className="inline text-yellow-400" />
  ));
};

const LabManagement = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/lab-management-form");
  };
  const handleClickPackage = () => {
    router.push("/lab-management-package");
  };
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <span className="flex items-center gap-2 rounded-full border border-gray-300 px-4 text-sm shadow-sm">
          <RiSearchLine className="text-pink-400" />
          <input
            type="text"
            placeholder="Search lab..."
            className="w-[150px] rounded-lg px-1 py-2 focus:outline-none md:w-[250px]"
          />
        </span>
        <Button value="Add New Lab" onClick={handleClick} />
      </div>

      <div className="overflow-x-auto rounded-xl shadow">
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
            {labData.map((lab, idx) => (
              <tr
                key={idx}
                className="text-peracolor border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{lab.name}</td>
                <td className="px-4 py-3">{lab.address}</td>
                <td className="px-4 py-3">{renderStars(lab.rating)}</td>
                <td className="px-4 py-3">{lab.review}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-lg">
                    <RiEdit2Line className="cursor-pointer text-green-800" />
                    <RiDeleteBin5Line className="cursor-pointer text-red-500" />
                    <button
                      onClick={handleClickPackage}
                      className="cursor-pointer rounded-sm bg-pink-600 px-3 py-1 text-sm text-white hover:bg-pink-700"
                    >
                      Add
                    </button>
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

export default LabManagement;
