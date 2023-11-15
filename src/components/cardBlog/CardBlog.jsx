import React, { useState } from "react";
import { Card, Modal } from "flowbite-react";
import PostDetails from "../postDetails/PostDetails";
import NavbarModal from "../navbar/NavbarModal";

const CardBlog = ({ ...singlePost }) => {
  const { title, content, cover, author } = singlePost;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        onClick={() => setOpenModal(true)}
        className="max-w-sm mx-auto"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={cover}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {content}
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
          <PostDetails {...singlePost} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardBlog;
