import nav from "@/public/database/nav.json";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import DashboardLink from "../atoms/DashboardLink";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();
  const { navigation } = nav;

  const handleLogout = () => {
    router.replace("/auth/signin");
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 transform bg-white shadow transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        z-50 md:relative md:translate-x-0 md:z-30 w-64`}
    >
      <nav className="flex h-full flex-col gap-7 bg-white py-4 md:bg-[#00000011]">
        <div className="flex px-4">
          <Link href="/">
            <h1 className="text-primary text-2xl font-bold">CANCER</h1>
          </Link>
        </div>

        <ul className="vertical-scrollbar flex h-full w-full flex-col gap-2 overflow-y-auto px-4">
          <div className="flex w-full flex-col gap-2">
            {navigation.map((item, index) => (
              <DashboardLink
                key={index}
                active={path === item.route}
                route={item.route}
                label={item.label}
                heroIcon={item.icon}
                handleClick={() => setIsSidebarOpen(false)}
                subMenu={item.subMenu}
              />
            ))}

            <DashboardLink
              route="#"
              label="Log out"
              heroIcon="ri-logout-circle-line"
              handleClick={handleLogout}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
