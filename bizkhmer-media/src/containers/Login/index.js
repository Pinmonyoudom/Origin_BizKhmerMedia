import React, {useState} from "react";
import Amplify, {Auth} from "aws-amplify";
import config from "../../config";

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

function LoginForm(props) {
  const [form, setForm] = useState({email: "", password: ""});
  const onFormSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.signIn(form.email, form.password);
      props.userHasAuthenticated(true);
      props.history.push("/");
      window.location.href = "/";
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="box">
      <form onSubmit={onFormSubmit} className="login-form">
        <p style={{color: "#fff", fontSize: 28, fontWeight: "bold"}}>Login</p>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}
        />
        <button className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
