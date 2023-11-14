import React from "react";
import { Dropdown, Navbar, Avatar, Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavbarDropdown = () => {
  return (
    <Navbar
      fluid
      rounded
      className="max-w-screen-xl mx-auto sticky w-full z-20 top-0 left-0"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tattoome
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Link to="/newpost">
          {" "}
          <Button outline pill className="mx-2">
            Add Post <FaPlus className="ml-2 h-6 w-6" />
          </Button>
        </Link>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              rounded
              status="online"
              statusPosition="top-right"
              size="md"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDropdown;
