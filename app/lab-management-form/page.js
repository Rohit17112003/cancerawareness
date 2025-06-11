import AddLabForm from "@/components/pages/LabManagement/Form";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddLabForm/>
    </MainLayout>
  );
  return design;
}
export default page;

