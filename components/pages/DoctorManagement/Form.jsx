
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const AddDoctorForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     avatar: "",
//     designation: "",
//     speciality: "",
//     experience: "",
//     review: "",
//     rating: "",
//   });

//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Doctor added:", formData);
//     alert("Doctor added successfully!");
//     router.push("/doctor-management"); // Move after adding
//   };

//   return (
//     <div className="mx-auto max-w-2xl p-6">
//       <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      
//         <h2 className="mb-4 text-2xl font-semibold text-gray-800">Add New Doctor</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Doctor's Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md outline-0 border border-gray-300 px-4 py-2"
//           />

//           <input
//             type="file"
//             name="avatar"
//             accept="image/*"
//             placeholder="Avatar Image URL"
//             value={formData.avatar}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md outline-0 border border-gray-300 px-4 py-2"
//           />

//           <input
//             type="text"
//             name="designation"
//             placeholder="Designation"
//             value={formData.designation}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md outline-0 border border-gray-300 px-4 py-2"
//           />

//           <input
//             type="text"
//             name="speciality"
//             placeholder="Speciality"
//             value={formData.speciality}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md outline-0 border border-gray-300 px-4 py-2"
//           />

//           <input
//             type="number"
//             name="experience"
//             placeholder="Experience (in years)"
//             value={formData.experience}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md outline-0 border border-gray-300 px-4 py-2"
//           />

//           <input
//             type="text"
//             name="review"
//             placeholder="Review Summary"
//             value={formData.review}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md outline-0 border border-gray-300 px-4 py-2"
//           />

//           <input
//             type="number"
//             name="rating"
//             placeholder="Rating (1 to 5)"
//             min="1"
//             max="5"
//             value={formData.rating}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md outline-0 border border-gray-300 px-4 py-2"
//           />

//           <button
//             type="submit"
//             className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
//           >
//             Add Doctor
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddDoctorForm;


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddDoctorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    designation: "",
    speciality: "",
    experience: "",
    review: "",
    rating: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, avatar: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor added:", formData);
    alert("Doctor added successfully!");
    router.push("/doctor-management");
  };

  return (
    <div className="mx-auto md:max-w-2xl py-6">
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 cursor-pointer font-semibold"
        >
          <span><i className="ri-arrow-left-line"></i></span> Back
        </button>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Add New Doctor</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Doctor's Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <input
            type="text"
            name="speciality"
            placeholder="Speciality"
            value={formData.speciality}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience (in years)"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <input
            type="text"
            name="review"
            placeholder="Review Summary"
            value={formData.review}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating (1 to 5)"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700 cursor-pointer"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorForm;



