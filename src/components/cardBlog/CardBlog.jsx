import React, { useState } from "react";
import { Card, Modal } from "flowbite-react";
import PostDetails from "../postDetails/PostDetails";
import NavbarModal from "../navbar/NavbarModal";

const CardBlog = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        onClick={() => setOpenModal(true)}
        className="max-w-sm mx-auto"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>

      <Modal
        size={"7xl"}
        show={openModal}
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <NavbarModal />
        <Modal.Body>
          <PostDetails />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardBlog;
