import BlogManagement from "@/components/pages/BlogManagement";
import MainLayout from "@/components/templates/MainLayout";
const page = () => {
  const design = (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <BlogManagement />
    </MainLayout>
  );
  return design;
}
export default page;
