import AddDoctorForm from "@/components/pages/DoctorManagement/Form";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddDoctorForm/>
    </MainLayout>
  );
  return design;
}
export default page;
