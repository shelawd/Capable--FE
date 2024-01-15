import "./App.css";
import Login from "./Component/login-signup/login";
import Register from "./Component/login-signup/register";
import Class from "./Component/class-page/class";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <Class />
      {/* <Login />
      <Register /> */}
    </div>
  );
}

export default App;
