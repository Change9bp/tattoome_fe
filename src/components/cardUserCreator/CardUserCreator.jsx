import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const CardUserCreator = ({ _id, name, lastName, avatar, role }) => {
  return (
    <Card>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src={avatar}
          width="96"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name} {lastName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          {/* <a
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            href={`/creatorPage/:${_id}`}
          >
            <p>Visita la sua pagina</p>
          </a> */}
          <Link to={`/creatorpage/${_id}`}>
            <Button>Visita la sua pagina</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CardUserCreator;
