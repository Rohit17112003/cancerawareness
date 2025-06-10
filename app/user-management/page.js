import UserManagement from "@/components/pages/UserManagement";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <UserManagement />
    </MainLayout>
  );
  return design;
}
export default page;
