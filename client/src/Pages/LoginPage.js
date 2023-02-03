import { useState } from "react";
import login from "../assets/login.webp";
import app from "../config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

var regexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function LoginPage() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailClass, setEmailClass] = useState("");

  const [password, setPassword] = useState("");
  const [passClass, setPassClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home", {
          state: {
            email: user.email,
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Invaild");
      });

    setEmail("");
    setPassword("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (email === "" || email === null) {
      setEmailClass("Enter email!");
    } else if (!regexp.test(String(email).toLowerCase())) {
      setEmailClass("Enter valid email!");
    } else {
      setEmailClass("");
      return true;
    }
  };

  const handlePasword = (e) => {
    setPassword(e.target.value);

    if (password === "" || password === null) {
      setPassClass("Enter password!");
    } else if (password.length < 5) {
      setPassClass("Enter longer password");
    } else {
      setPassClass("");
      return true;
    }
  };

  return (
    <div className="flex flex-row  justify-between items-center">
      <div className="h-[400px] mt-28">
        <img src={login} alt="login" className="h-full " />
      </div>

      <div className="flex flex-col justify-between mr-32">
        <div className="text-3xl font-bold text-blue-900">Welcome Back</div>
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                type="text"
                onChange={handleEmail}
                placeholder="Email"
              />
              <p className="text-red-600">{emailClass}</p>
            </div>
            <div className="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={handlePasword}
                type="password"
                placeholder="******************"
              />
              <p className="text-red-600">{passClass}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
