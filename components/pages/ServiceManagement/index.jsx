"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";

import { useState } from "react";
import {
  RiEdit2Line,
  RiDeleteBinLine,
  RiAddLine,
  RiSearchLine,
} from "react-icons/ri";

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
    service.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Delete service handler
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("/service-management-form");
  };

  return (
    <div className="mx-auto py-6">
      <header className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <h1 className="text-primary text-xl font-bold md:text-2xl">
            Manage Services
          </h1>
          <p className="text-peracolor mt-1">
            Add, update, or remove cancer awareness services
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="relative">
            <RiSearchLine
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search services..."
              className="md:text-md rounded-full border border-gray-300 py-2 pr-4 pl-9 text-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button value="Add New Service" onClick={handleClick} />
        </div>
      </header>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full bg-white text-left text-sm">
          <thead className="text-primary bg-pink-100">
            <tr>
              <th className="rounded-tl-lg px-5 py-3">Service Name</th>
              <th className="px-5 py-3">Description</th>
              <th className="px-5 py-3">Duration</th>
              <th className="rounded-tr-lg px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.length > 0 ? (
              filteredServices.map(({ id, name, description, duration }) => (
                <tr
                  key={id}
                  className="text-peracolor border-b border-gray-200 transition hover:bg-pink-50"
                >
                  <td className="px-5 py-3 font-medium">{name}</td>
                  <td className="px-5 py-3">{description}</td>
                  <td className="px-5 py-3">{duration}</td>
                  <td className="px-5 py-3">
                    <div className="flex gap-3 text-lg text-pink-600">
                      <button
                        title="Edit Service"
                        className="cursor-pointer text-green-800 hover:text-pink-900"
                      >
                        <RiEdit2Line />
                      </button>
                      <button
                        title="Delete Service"
                        className="cursor-pointer text-red-500 hover:text-red-700"
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
                  className="py-8 text-center text-gray-500 italic"
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
