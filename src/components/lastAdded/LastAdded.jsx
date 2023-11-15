import React, { useContext, useEffect } from "react";
import CardBlog from "../cardBlog/CardBlog";
import ResponsivePagination from "react-responsive-pagination";
import { GlobalProvider } from "../../context/getContext";

const LastAdded = () => {
  const { getTattooPosts, tattooPosts, currentPage, setCurrentPage } =
    useContext(GlobalProvider);

  const handlePagination = (value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getTattooPosts();
  }, [currentPage]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-2 lg:grid-cols-3 xl-grid-cols-4">
        {tattooPosts.posts?.map((singlePost) => (
          <CardBlog {...singlePost} />
        ))}
      </div>{" "}
      <ResponsivePagination
        current={currentPage}
        total={tattooPosts && tattooPosts.totalPages}
        onPageChange={handlePagination}
      />
    </div>
  );
};

export default LastAdded;
