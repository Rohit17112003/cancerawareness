

"use client";
import { useRouter } from "next/navigation";

const users = [
  {
    avatar: "../image/awatar.svg",
    name: "Rahul Mehta",
    email: "rahul@example.com",
    role: "Volunteer",
    status: "Active",
    joined: "2024-12-01",
  },
  {
    avatar: "../image/awatar.svg",
    name: "Dr. Sneha Roy",
    email: "sneha.roy@example.com",
    role: "Oncologist",
    status: "Inactive",
    joined: "2023-08-15",
  },
];

const UserManagement = () => {
  const router = useRouter();

  const handleAddUserClick = () => {
    router.push("/user-management-form");
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full border border-gray-300 px-4 text-sm flex items-center gap-2">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search here..."
            className="w-[150px] md:w-[250px] rounded-lg px-1 py-2 focus:outline-none"
          />
        </span>

        <button
          className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          onClick={handleAddUserClick}
        >
        <span><i className="ri-add-line pr-1"></i></span>
          Add New User
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full bg-white text-left text-sm">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="px-4 py-3">Avatar</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="hover:bg-gray-50 border border-gray-200">
                <td className="px-4 py-2">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="h-12 w-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <span
                    className={`rounded px-2 py-1 text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2">{user.joined}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2 text-lg">
                    <i className="ri-edit-box-line text-blue-500 cursor-pointer"></i>
                    <i className="ri-delete-bin-5-line text-red-500 cursor-pointer"></i>
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

export default UserManagement;
