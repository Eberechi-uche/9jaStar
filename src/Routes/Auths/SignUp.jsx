import { Link } from "react-router-dom";
import { Form, Input } from "../../components/Form/Form.component";

import "./auth.styles.css";
import { useState } from "react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
        <h2>Get Started</h2>
        <p>
          Already have an account ?
          <Link to={"/login"} className="link">
            <span>Login</span>
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
          <Input
            label={"password"}
            type={show}
            required
            click={handleShowPassword}
            name="confirmPassword"
            onChange={handleOnChange}
            hide={hide}
          />
        </Form>
      </div>

      <div className="auth-image-container">
        <img src="images/singer.jpg" alt="artist" />
      </div>
    </div>
  );
};
