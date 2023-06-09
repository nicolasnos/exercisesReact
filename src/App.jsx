import { useState } from "react";
import Home from "./Components/Home";
import "./App.scss";

function App() {
  //variables que verifican usuario, contraseña y renderizacion a Home
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(false);

  const handleSubmit = (e) => {
    //funcion verificadora
    e.preventDefault();
    if (name !== "userName1" && password !== "safePassword") {
      console.log("something went wrong");
    } else {
      setLog(true);
    }
  };
  return (
    <>
      {/* saludo por defecto y saludo personalizado al usuario*/}
      {!log ? (
        <>
          <main>
            {!name ? (
              <div className="saludo">
                {" "}
                <h2>¡Welcome to my portfolio!</h2>{" "}
              </div>
            ) : (
              <div className="saludo">
                <h2>¡Welcome {name}!</h2>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Write your name
                <input
                  type="text"
                  id="name"
                  placeholder="Write your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="pasW">
                Write the right password
                <input
                  id="pasW"
                  type="password"
                  placeholder="Write the right password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">LogIn</button>
            </form>
            {/* credenciales necesarias para que se pueda ingresar*/}
            <div className="credentials">
              <h2>username: userName1</h2>
              <h3>password: safePassword</h3>
            </div>
          </main>
        </>
      ) : (
        /*Caso positivo en el que las credenciales sean correctas, va a Home */
        <Home />
      )}
    </>
  );
}

export default App;
