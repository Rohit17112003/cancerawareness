import AddBlogForm from "@/components/pages/BlogManagement/Form";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddBlogForm/>
    </MainLayout>
  );
  return design;
}
export default page;
