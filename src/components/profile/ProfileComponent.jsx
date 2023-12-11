import { useState } from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";

const demoImage1 = "https://wallpapercave.com/wp/wp9275383.jpg";

const ProfileComponent = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div>
      <div className="h-full relative">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 "
          style={{ top: "-50px" }}
        >
          <img
            src={demoImage1}
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="pt-11">
        <p className="mt-2 text-center text-slate-500">Frontend Developer</p>

        <div>
          <div className="flex gap-1 justify-center text-sm">
            <UserGroupIcon className="w-4" />
            <span>21 followers</span>
            <span>43 following</span>
          </div>

          <div className="p-2">
            <div className="flex justify-center gap-3 align-middle">
              <h1 className="text-sm font-bold">
                Make my profile visable to employers
              </h1>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-5 rounded-full w-10`}
              >
                {/* <span className="sr-only">Enable notifications</span> */}
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block w-3 h-3 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
