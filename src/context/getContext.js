import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalProvider = createContext();

const GlobalContext = ({ children }) => {
  const [tattooPosts, setTattooPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const navigate = useNavigate();

  // CHIAMATA GET PER I POST CON PAGINATION
  const getTattooPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/tattooPost?page=${currentPage}&pageSize=${pageSize}`
        /* {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("loggedInUser")),
          },
        }*/
      );
      setTattooPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //CHIAMATA POST PER REGISTRAZIONE USER

  const registerUser = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/userCreator`,
        values
        /*{
        headers: {
          Authorization: JSON.parse(localStorage.getItem("loggedInUser")),
        },
      }*/
      );
      console.log(response);
    } catch (err) {
      console.error("errore", err);
    }
  };

  //CHIAMATA ALLA ROTTA DI LOGIN CHE SALVA IN LOCAL.STORAGE IL TOKEN

  const loginUser = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/login`,
        values
      );
      if (response.data.token) {
        console.log("stai salvando il token", response.data.token);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(response.data.token)
        );
        navigate("/home"); //vengo reindirizzato alla HOME PAGE
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalProvider.Provider
      value={{
        registerUser,
        loginUser,
        getTattooPosts,
        tattooPosts,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </GlobalProvider.Provider>
  );
};

export default GlobalContext;
