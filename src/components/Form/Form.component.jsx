import "./form.styles.css";

export const Form = ({ children, title, action, click, description }) => {
  return (
    <div className="form-wrapper">
      <form className="form-container">
        {children}
        <button
          type="submit"
          onClick={click}
          className="btn btn-round btn-fill"
        >
          {action}
        </button>
        <p className="pd-10"> OR </p>
        <div className="form-footer-icon">
          <img src="images/google.png" />
          <img src="images/google.png" />
        </div>
      </form>
    </div>
  );
};

export const Input = ({ label, click, ...props }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-field-wrapper">
        <input className="input-field" {...props} />
        {click && (
          <div onClick={click} className="icon-container">
            {props.hide ? (
              <img src="images/icons8-hide-60.png" alt="icon" />
            ) : (
              <img src="images/icons8-eye-64.png" alt="icon" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
