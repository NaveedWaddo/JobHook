import { IconFishHook } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className="w-full bg-black h-28 text-white  px-6  flex justify-between items-center">
      <div className="flex gap-1 items-center">
        <IconFishHook className="h-10 w-10" stroke={2} />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      <div className="flex gap-3">
        <a href="">Find Jobs</a>
        <a href="">Find Talent</a>
        <a href="">Upload Jobs</a>
        <a href="">About Us</a>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <IconBell />
          <div className="flex gap-1 items-center">
            <div>Naveed </div>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </div>
          <IconSettings />
        </div>
      </div>
    </div>
  );
};

export default Header;
