// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const AddHospitalForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     avatar: "",
//     designation: "",
//     speciality: "",
//     experience: "",
//     reviews: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Doctor added:", formData);
//     alert("Doctor added successfully!");
//   };

//   const router = useRouter();
//   const handleHospitalManagement = () => {
//     router.push("/hospital-management");
//   };
//   const design = (
//     <>
//       <div className="mx-auto flex max-w-xl items-center rounded-2xl bg-[#fdf8f5] p-5 shadow-sm">
//         {/* Avatar */}
//         <div className="mr-5 h-24 w-24 overflow-hidden rounded-full">
//           <img
//             src="/doctor.jpg" // put your image in public folder with this name
//             alt="Dr Rebbeka"
//             width={96}
//             height={96}
//             className="object-cover"
//           />
//         </div>

//         {/* Details */}
//         <div className="flex flex-col">
//           <h2 className="text-xl font-semibold text-gray-900">Dr Rebbeka</h2>
//           <p className="text-gray-600">Reproductive Psychiatry • Psychiatry</p>
//           <div className="mt-2 flex items-center text-sm text-gray-700">
//             <span className="ml-2 cursor-pointer text-blue-600 hover:underline">
//               220 Reviews
//             </span>
//             <span className="ml-3">• 6 Years Experience</span>
//           </div>
//         </div>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="mx-auto mt-10 max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md"
//       >
//         <h2 className="mb-4 text-2xl font-semibold">Add Hospital</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
//           required
//         />

//         <input
//           type="text"
//           name="designation"
//           placeholder="Designation"
//           value={formData.designation}
//           onChange={handleChange}
//           className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
//           required
//         />

//         <input
//           type="text"
//           name="speciality"
//           placeholder="Speciality"
//           value={formData.speciality}
//           onChange={handleChange}
//           className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
//           required
//         />

//         <input
//           type="number"
//           name="experience"
//           placeholder="Experience (Years)"
//           value={formData.experience}
//           onChange={handleChange}
//           className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
//           required
//         />

//         <input
//           type="number"
//           name="reviews"
//           placeholder="Review Count"
//           value={formData.reviews}
//           onChange={handleChange}
//           className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
//           required
//         />

//         <button
//           type="submit"
//           onClick={handleHospitalManagement}
//           className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700 cursor-pointer"
//         >
//           Add Hospital
//         </button>
//       </form>
//     </>
//   );
//   return design;
// };
// export default AddHospitalForm;


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiHospitalLine } from "react-icons/ri";

const AddHospitalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    rating: "",
    review: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; // ✅ semicolon added here

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, rating } = formData;

    if (!name || !address || !rating) {
      alert("Please fill all required fields.");
      return;
    }

    const stars = "⭐".repeat(Math.min(5, Math.max(1, parseInt(rating))));
    const finalData = { ...formData, rating: stars };

    console.log("Hospital added:", finalData);
    alert("Hospital added successfully!");
    router.push("/hospital-management");
  };

  return (
    <>
      <div className="mx-auto flex max-w-xl items-center gap-4 rounded-2xl bg-[#fdf8f5] p-5 shadow-sm">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <RiHospitalLine className="text-3xl text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Add New Hospital</h2>
          <p className="text-sm text-gray-600">Please enter hospital details below</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Hospital Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1 to 5)"
          value={formData.rating}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          min={1}
          max={5}
          required
        />

        <textarea
          name="review"
          placeholder="Review (optional)"
          value={formData.review}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700 cursor-pointer"
        >
          Add Hospital
        </button>
      </form>
    </>
  );
};

export default AddHospitalForm;

