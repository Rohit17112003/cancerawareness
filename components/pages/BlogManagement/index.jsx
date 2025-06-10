

"use client";

const seriesData = [
  {
    thumbnails: "../image/thumbnain.svg",
    description: "Tailwind CSS Series:",
    title: "Tailwind CSS Series:",
    author: "N/A",
    content: "What is the write time to being something",
    type: "types",
  },
  {
    thumbnails: "../image/thumbnail.svg",
    description: "Tailwind CSS Series:",
    title: "Mastering Next.js:",
    author: "N/A",
    content: "What is the write time to being something",
    type: "types",
  },
];

const BlogManagement = () => {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full border border-gray-300 px-4 text-sm">
          <i className="ri-search-line text-pink-400"></i>
          <input
            type="text"
            placeholder="Search here..."
            className="w-[150px] rounded-lg px-1 py-2 focus:outline-none md:w-[250px]"
          />
        </span>

        <button className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
          Add New Blog
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white text-left text-sm">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="rounded-tl-lg rounded-bl-lg px-4 py-3">
                Thumbnail
              </th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Content</th>
              <th className="px-4 py-3">Type</th>
              <th className="rounded-tr-lg rounded-br-lg px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {seriesData.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={5}
                    alt="thumbnail"
                    className="h-16 w-16 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.author}</td>
                <td className="px-4 py-2">{item.content}</td>
                <td className="px-4 py-2">{item.type}</td>

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

export default BlogManagement;

