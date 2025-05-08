import { IconAnchor } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full mine-shaft-950 h-20 text-white  px-6  flex justify-between items-center">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className="h-10 w-10" stroke={2} />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      {NavLinks()}
      <div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <div>Naveed</div>
            <Avatar
              src={null}
              alt="it's me"
              color="yellow"
              radius="xl"
              size="md"
            >
              N
            </Avatar>
          </div>

          <div className="bg-mine-shaft-900 rounded-full p-1.5">
            <IconSettings stroke={1.5} />
          </div>

          <div className="bg-mine-shaft-900 rounded-full p-1.5 relative">
            <Indicator
              color="brightSun.4"
              offset={6}
              size={12}
              processing
              position="top-end"
              withBorder
            >
              <IconBell stroke={1.5} />
            </Indicator>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
