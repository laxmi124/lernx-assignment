import Content from "../content/Content";
import CustomNavbar from "../navbar/CustomNavbar";
import ProfileComponent from "../profile/ProfileComponent";
import SideBar from "../sidebar/SideBar";

const Layout = () => {
  return (
    <div className="w-screen block md:flex h-[100%] ">
      <div className="w-full lg:w-60">
        <SideBar />
      </div>

      <div className=" w-full lg:w-5/6 pt-20 grow-[1]">
        <div className="">
          <CustomNavbar />
        </div>
        {/* Blue Baground */}
        <div className="hidden lg:flex relative bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 h-52 rounded-md"></div>

        {/* content */}
        <div className="w-full lg:flex gap-0 lg:gap-1">
          {/* profilebar */}
          <div className="w-full lg:w-5/12 bg-orange-300 h-48 mx-auto">
            <ProfileComponent />
          </div>
          {/* content */}
          <div className="w-full lg:w-9/1 py-3  px-0 md:px-2  ">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
