import AddHospitalForm from "@/components/pages/HospitalManagement/Form";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddHospitalForm/>
    </MainLayout>
  );
  return design;
}
export default page;

