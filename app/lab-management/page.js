import LabManagement from "@/components/pages/LabManagement";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <LabManagement />
    </MainLayout>
  );
  return design;
}
export default page;
