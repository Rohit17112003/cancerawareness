"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";

const seriesData = [
  {
    thumbnails: "/image/awatar.svg",
    description: "Introduction to Tailwind",
    title: "Getting Started with Tailwind CSS",
    author: "Dr. Meena Sharma",
    content: "Tailwind CSS helps in creating modern UIs faster...",
    type: "Awareness",
  },
  {
    thumbnails: "/image/awatar.svg",
    description: "Master Next.js fundamentals",
    title: "Mastering Next.js for SEO",
    author: "Dr. Anuj Verma",
    content: "Learn how Next.js can improve website performance...",
    type: "Health Tips",
  },
];

const BlogManagement = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/blog-management-form");
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 rounded-full border border-gray-300 px-4 py-1">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search blog..."
            className="w-[150px] rounded-lg px-1 py-1 focus:outline-none md:w-[250px]"
          />
        </div>
        <Button value="Add New Blog" onClick={handleClick} />
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full min-w-[700px] bg-white text-left text-sm">
          <thead className="bg-gray-200 text-primary">
            <tr>
              <th className="px-4 py-3">Thumbnail</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Excerpt</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {seriesData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 hover:bg-gray-50 text-peracolor"
              >
                <td className="px-4 py-2">
                  <img
                    src={item.thumbnails}
                    alt="thumbnail"
                    className="h-14 w-14 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-2 font-medium ">
                  {item.title}
                </td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">{item.content}</td>
                <td className="px-4 py-2">{item.author}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <i className="ri-edit-2-line cursor-pointer text-lg text-green-800"></i>
                    <i className="ri-delete-bin-line cursor-pointer text-lg text-red-500"></i>
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

export default BlogManagement;
