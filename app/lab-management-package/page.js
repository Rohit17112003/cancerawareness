import AddLabPackageForm from "@/components/pages/LabManagement/AddLabPackageForm";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddLabPackageForm/>
    </MainLayout>
  );
  return design;
}
export default page;

