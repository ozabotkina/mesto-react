import React from "react";
import EntranceForm from "./EntranceForm";
import { withRouter } from "react-router-dom";
import { register } from "./Auth";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(email, password)
      .then((res) => {
        if (res.ok) {
          props.history.push("/sign-in");
          props.onSuccess();
          return res.json();
        } else {
          console.log("fail");
          setEmail("");
          setPassword("");
          props.onFail();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <EntranceForm
      title="Регистрация"
      button="Зарегистрироваться"
      link="Уже зарегистрированы? Войти"
      linkPath="/sign-in"
      onSubmit={handleSubmit.bind(this)}
    >
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange.bind(this)}
        className="signin__input"
        placeholder="Email"
        required
      />
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange.bind(this)}
        className="signin__input"
        placeholder="Пароль"
        required
      />
    </EntranceForm>
  );
}
export default withRouter(Register);
