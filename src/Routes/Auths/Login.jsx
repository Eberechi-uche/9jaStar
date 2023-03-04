import { Form, Input } from "../../components/Form/Form.component";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.styles.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [hide, setHide] = useState(true);
  const show = hide ? "password" : "text";
  const handleOnChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };
  const handleShowPassword = () => {
    setHide(!hide);
  };
  return (
    <div className="login-wrapper">
      <div className="auth-form-container">
        <h2>Login</h2>

        <p>
          dont have an account ?
          <Link to={"/sign-up"} className="link">
            <span>Sign up</span>
          </Link>
        </p>
        <Form title={"Login"} action={"Login"}>
          <Input
            label={"Email"}
            type="email"
            required
            name="email"
            onChange={handleOnChange}
          />
          <Input
            label={"password"}
            type={show}
            required
            click={handleShowPassword}
            name="password"
            onChange={handleOnChange}
            hide={hide}
          />
        </Form>
      </div>

      <div className="auth-image-container">
        <img src="images/dance.jpg" alt="decorativ" />
      </div>
    </div>
  );
};
