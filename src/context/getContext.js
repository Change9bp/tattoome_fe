import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalProvider = createContext();

const GlobalContext = ({ children }) => {
  const [tattooPosts, setTattooPosts] = useState([]);
  const [tattooPostsForCreator, setTattooPostsForCreator] = useState([]);
  const [creatorList, setCreatorList] = useState([]);
  const [infoSingleCreator, setInfoSingleCreator] = useState({});
  const [dataUser, setDataUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const navigate = useNavigate();

  //CHIAMATA PER LA GESTIONE DI CLOUDINARY
  const uploadFileCloudinary = async (key, endpoint, objFile) => {
    const fileData = new FormData();
    fileData.append(key, objFile);
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

  //CHIAMATA USER GET BY ID

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
      // setInfoSingleCreator(response.data.userCreator);
      // return response.data.userCreator;
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

  // CHIAMATA GET PER I POST DI UN SOLO CREATOR
  const getTattooPostsForCreator = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/tattooPost/${id}/creator`
        /*, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("loggedInUser")),
          },
        }*/
      );

      setTattooPostsForCreator(response.data.findPost);
      console.log(
        "la response della chiamata dei post per creator",
        response.data
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  //CHIAMATA DELETE DEI TATTOPOST
  const delPost = async (postId) => {
    const confirmDel = window.confirm(
      "Sei sicuro di voler cancellare il post?"
    );
    if (confirmDel) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_SERVER_BASE_URL}/tattooPost/${postId}`
          // {
          //   headers: {
          //     Authorization: JSON.parse(localStorage.getItem("loggedInUser")),
          //   },
          // }
        );
        console.log(response);
        //   navigate("/home");
      } catch (error) {
        console.log(error);
      }
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
        getTattooPostsForCreator,
        delPost,
        creatorList,
        tattooPosts,
        currentPage,
        setCurrentPage,
        infoSingleCreator,
        setInfoSingleCreator,
        dataUser,
        setDataUser,
        setTattooPostsForCreator,
      }}
    >
      {children}
    </GlobalProvider.Provider>
  );
};

export default GlobalContext;
