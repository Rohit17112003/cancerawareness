import AddServiceForm from "@/components/pages/ServiceManagement/Form";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddServiceForm/>
    </MainLayout>
  );
  return design;
}
export default page;

