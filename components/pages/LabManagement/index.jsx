
"use client";
import { useRouter } from "next/navigation";
import { RiSearchLine, RiEditBoxLine, RiDeleteBin5Line } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

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
    <AiFillStar key={idx} className="text-yellow-400 inline" />
  ));
};

const LabManagement = () => {
  const router= useRouter();
  const handleClick=() =>{
    router.push("/lab-management-form")
  }
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

        <button onClick={handleClick} className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600">
          <span><i className="ri-add-fill pr-1"></i></span>Add New Lab
        </button>
      </div>

      <div className="overflow-x-auto shadow rounded-xl">
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
            {labData.map((lab, idx) => (
              <tr key={idx} className="hover:bg-gray-50 border-b border-gray-200">
                <td className="px-4 py-3">{lab.name}</td>
                <td className="px-4 py-3">{lab.address}</td>
                <td className="px-4 py-3">{renderStars(lab.rating)}</td>
                <td className="px-4 py-3">{lab.review}</td>
                <td className="px-4 py-3">
                  <div className="text-md flex items-center gap-2">
                    <RiEditBoxLine className="cursor-pointer text-black text-xl" />
                    <RiDeleteBin5Line className="cursor-pointer text-red-500 text-xl" />
                    <button className="cursor-pointer rounded-sm bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
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


