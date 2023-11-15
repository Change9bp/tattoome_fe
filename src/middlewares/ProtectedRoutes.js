import { Outlet, useNavigate } from "react-router-dom";
import Login from "../pages/login/Login";
import { jwtDecode, InvalidTokenError } from "jwt-decode";

// installare npm i jwt-decoded
export const isAuth = () => {
  return JSON.parse(localStorage.getItem("loggedInUser"));
};

const ProtectedRoutes = () => {
  const auth = isAuth();
  //nuovo codice
  const decoded = auth ? jwtDecode(auth) : null;

  console.log("vediamo se vedo i dati del token decriptato", decoded);
  localStorage.setItem("userDataDetails", JSON.stringify(decoded));
  const dataUser = JSON.parse(localStorage.getItem("userDataDetails"));

  console.log("id dal localstorage?", dataUser.id);

  /* const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  },[navigate, auth]);

  return decoded
  
  const Protected = () => {
    const auth = isAuth()
    return auth ? <Outlet /> : <Login />
  }*/

  //la chiamata la faccio nel middleware, passo il token al backend mi faccio ritornare un booleano e poi gestisco l'outlet ed il login
  //oppure lo decodifico, passo la mail alla rotta del backend e cerco l'utente nel modello

  return auth ? <Outlet /> : <Login />;
}; //outlet sta a significare qualsiasi componente figlio del wrap “protectedRoutes” presente in app.js

export default ProtectedRoutes;
