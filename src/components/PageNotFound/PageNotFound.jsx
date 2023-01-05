import React from "react";
import { useNavigate } from "react-router-dom";

import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBackOnPage = () => {
    navigate(-1);
  };

  return (
    <section className="page-not-found">
      <h1 className="page-not-found__error-code">404</h1>
      <p className="page-not-found__signature">Page not found</p>
      <button
        className="page-not-found__come-back-link"
        onClick={handleBackOnPage}
      >
        Go back
      </button>
    </section>
  );
};

export default PageNotFound;
