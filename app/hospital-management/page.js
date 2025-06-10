import HospitalManagement from "@/components/pages/HospitalManagement";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <HospitalManagement />
    </MainLayout>
  );
  return design;
}
export default page;
