/* eslint-disable no-unused-vars */
import { EnvelopeIcon as EmailIcon } from "@heroicons/react/24/outline";
import { BellIcon as NotificationIcon } from "@heroicons/react/24/outline";
import SearchBar from "../searchbar/SearchBar";
import ProfileImage from "../profileImage/ProfileImage";

const navIcons = [
  { icon: <NotificationIcon /> },
  {
    icon: <EmailIcon />,
  },
];

const CustomNavbar = () => {
  const avatarUrl =
    "https://previews.123rf.com/images/ksuperksu/ksuperksu1507/ksuperksu150700065/43127786-blue-flat-style-square-shaped-female-character-icon-with-shadow-illustration-of-an-attractive-asian.jpg";

  return (
    <div className="fixed top-0 left-0 w-full lg:flex lg:gap-4 justify-end bg-white py-5 px-8 hidden">
      <SearchBar />
      {navIcons.map((item, idx) => (
        <div
          key={idx}
          className="border border-solid border-gray-200  rounded-md p-1"
        >
          <div className="h-6 w-6 text-indigo-500 group-hover:text-white cursor-pointer">
            {item?.icon}
          </div>
        </div>
      ))}

      <div>
        <ProfileImage imageUrl={avatarUrl} />
      </div>
    </div>
  );
};

export default CustomNavbar;
