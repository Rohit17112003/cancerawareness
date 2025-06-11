

"use client";

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
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-1">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search blog..."
            className="w-[150px] md:w-[250px] rounded-lg px-1 py-1 focus:outline-none"
          />
        </div>

        <button className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">
          Add New Blog
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full min-w-[700px] bg-white text-left text-sm">
          <thead className="bg-gray-200 text-gray-800">
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
              <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={item.thumbnails}
                    alt="thumbnail"
                    className="h-14 w-14 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  {item.title}
                </td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">{item.content}</td>
                <td className="px-4 py-2">{item.author}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <i className="ri-edit-box-line text-blue-600 cursor-pointer text-lg"></i>
                    <i className="ri-delete-bin-line text-red-500 cursor-pointer text-lg"></i>
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
