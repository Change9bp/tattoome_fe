import React, { useRef, useState } from "react";

const PostDetails = ({ ...singlePost }) => {
  const { title, content, cover, author } = singlePost;

  const [objFit, setObjFit] = useState(null);
  const imgRef = useRef(null);

  const handleImgDimension = () => {
    console.log(
      "altezza",
      imgRef.current.naturalHeight,
      "lunghezza",
      imgRef.current.naturalWidth
    );

    let aspect =
      imgRef.current.naturalWidth >= imgRef.current.naturalHeight
        ? imgRef.current.naturalWidth / imgRef.current.naturalHeight
        : imgRef.current.naturalHeight / imgRef.current.naturalWidth;
    console.log(aspect);
    const newObjFit =
      aspect >= 0.95 && aspect <= 1.05
        ? "object-cover"
        : aspect >= 1.3 && aspect <= 1.9
        ? "object-contain"
        : null;
    return newObjFit;
  };

  return (
    <div className="lg:w-4/6 w-3/4 mx-auto">
      <h1 className="text-5xl font-extrabold dark:text-white text-center mb-6">
        {title}
        <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
          Questo tatuaggio si chiama ciao!
        </small>
      </h1>
      <div className="lg:w-4/6 w-3/4 h-96 mx-auto">
        <img
          ref={imgRef}
          className={`w-full h-full ${objFit}`}
          src={cover}
          alt="image description"
          onLoad={() => setObjFit(handleImgDimension)}
        />
      </div>
      <h5 className="text-xl font-bold dark:text-white">Descrizione</h5>

      <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        {content}
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease, with a complete audit
        trail for every change.
      </p>
    </div>
  );
};

export default PostDetails;
