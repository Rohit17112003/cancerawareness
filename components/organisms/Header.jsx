import Link from "next/link";

const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-5 py-3 shadow-sm md:px-8">
      <div className="flex items-center gap-4 sm:gap-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <Link href="#" className="text-gray-800">
          <h1 className="text-xl font-bold text-nowrap capitalize">
            {pageTitle}
          </h1>
        </Link>
      </div>

      <div className="flex w-2/3 flex-row items-center justify-end gap-2">
        {
          <div className="flex items-center gap-3">
            <span>
              <i className="ri-notification-3-fill ri-lg text-primary"></i>
            </span>
            <Link href="/profile">
              <div className="bg-primary/10 text-primary flex aspect-square h-12 w-12 items-center justify-center rounded-full text-xl">
                <i className="ri-user-smile-fill ri-lg"></i>
              </div>
            </Link>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
