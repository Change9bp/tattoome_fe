import { Outlet, useNavigate } from "react-router-dom";
import Login from "../pages/login/Login";
import { jwtDecode, InvalidTokenError } from "jwt-decode";

// installare npm i jwt-decoded
export const isAuth = () => {
  return JSON.parse(localStorage.getItem("loggedInUser"));
};

const ProtectedRoutes = () => {
  const auth = isAuth();

  if (!auth) {
    // Se l'utente non è autenticato, puoi gestire qui il reindirizzamento o fare altre azioni
    console.log("Utente non autenticato. Reindirizzamento o altre azioni...");
    return <Login />;
  }

  // Decodifica il token se esiste
  const decoded = jwtDecode(auth);

  console.log("Dati del token decriptato:", decoded);

  // Salva i dati decodificati nel localStorage con la chiave "userDataDetails"
  localStorage.setItem("userDataDetails", JSON.stringify(decoded));

  // Ottieni i dati dell'utente dal localStorage
  const dataUser = JSON.parse(localStorage.getItem("userDataDetails"));

  console.log("ID dal localStorage?", dataUser.id);

  // Restituisci i componenti figlio tramite Outlet
  return <Outlet />;
};

export default ProtectedRoutes;
