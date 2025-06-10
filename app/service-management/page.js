import ServiceManagement from "@/components/pages/ServiceManagement";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <ServiceManagement />
    </MainLayout>
  );
  return design;
}
export default page;
