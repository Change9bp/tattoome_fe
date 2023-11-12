import React from "react";
import { Button, Navbar, Avatar } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

const NavbarModal = () => {
  return (
    <Navbar fluid rounded>
      <Avatar img="/images/people/profile-picture-5.jpg" rounded size="lg">
        <div className="space-y-1 font-medium dark:text-white">
          <div>Jese Leos</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Joined in August 2014
          </div>
        </div>
      </Avatar>

      <div className="flex md:order-2">
        <Button.Group outline>
          <Button gradientMonochrome="info">
            <HiUserCircle className="mr-3 h-4 w-4" />
            Profile
          </Button>
          <Button gradientMonochrome="info">
            <HiAdjustments className="mr-3 h-4 w-4" />
            Settings
          </Button>
          <Button gradientMonochrome="info">
            <HiCloudDownload className="mr-3 h-4 w-4" />
            Messages
          </Button>
        </Button.Group>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default NavbarModal;
