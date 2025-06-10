import DoctorManagement from "@/components/pages/DoctorManagement";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <DoctorManagement />
    </MainLayout>
  );
  return design;
}
export default page;
