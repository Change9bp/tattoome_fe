import React from "react";
import { Dropdown } from "flowbite-react";

const DropDownBar = () => {
  return (
    <div className="max-w-screen-md py-8 px-4 grid grid-cols-4 mx-auto">
      <span className="m-auto font-bold">Filtra i contenuti:</span>
      <Dropdown label="Nazione" dismissOnClick={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Dropdown label="Regione" dismissOnClick={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Dropdown label="Città" dismissOnClick={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default DropDownBar;
