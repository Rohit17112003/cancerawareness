import AddUserForm from "@/components/pages/UserManagement/Form";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddUserForm />
    </MainLayout>
  );
  return design;
}
export default page;
