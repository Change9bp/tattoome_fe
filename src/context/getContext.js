import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalProvider = createContext();

const GlobalContext = ({ children }) => {
  const [tattooPosts, setTattooPosts] = useState([]);
  const [creatorList, setCreatorList] = useState([]);
  const [infoSingleCreator, setInfoSingleCreator] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const navigate = useNavigate();

  //CHIAMATA PER LA GESTIONE DI CLOUDINARY
  const uploadFileCloudinary = async (key, endpoint, objFile) => {
    console.log(objFile, "avatar del file");
    const fileData = new FormData();
    fileData.append(key, objFile);

    console.log("bella caro", objFile);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/${endpoint}/cloudUpload`,
        fileData
      );
      return response.data[key];
    } catch (error) {
      console.log(error.response, "errore in upload file");
    }
  };

  // CHIAMATA GET PER I CREATOR
  const getCreatorList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/userCreator/onlyCreator` /*, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("loggedInUser")),
      },
    }*/
      );
      console.log(response.data, "lista creator");
      setCreatorList(response.data.userCreators);
    } catch (error) {
      console.log(error.response);
    }
  };

  //CHIAMATA GET BY ID

  const getInfoSingleCreator = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/userCreator/${id}` /*, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("loggedInUser")),
      },
    }*/
      );
      console.log(response.data.userCreator, "single creator");
      setInfoSingleCreator(response.data.userCreator);
    } catch (error) {
      console.log(error.response);
    }
  };

  // CHIAMATA GET PER I POST CON PAGINATION
  const getTattooPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/tattooPost?page=${currentPage}&pageSize=${pageSize}`
        /*, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("loggedInUser")),
          },
        }*/
      );

      setTattooPosts(response.data);
    } catch (error) {
      console.log(error.response);
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
    } catch (error) {
      console.error("errore", error.response);
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
      console.log(response, "la res");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <GlobalProvider.Provider
      value={{
        registerUser,
        loginUser,
        getTattooPosts,
        uploadFileCloudinary,
        getCreatorList,
        getInfoSingleCreator,
        creatorList,
        tattooPosts,
        currentPage,
        setCurrentPage,
        infoSingleCreator,
        setInfoSingleCreator,
      }}
    >
      {children}
    </GlobalProvider.Provider>
  );
};

export default GlobalContext;
