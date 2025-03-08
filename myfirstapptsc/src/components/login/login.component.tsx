import {  useRef, useState } from "react";
import { LoginService } from "./login.service";

export function Login() {
  let lref:any = useRef("");
  let pref:any = useRef("");
  let [msg, setMsg] = useState("*******");

  function doLogin() {
    if (LoginService.checkLogin(lref.current.value, pref.current.value))
      setMsg("Welcome " + lref.current.value);
    else 
      setMsg("Invalid login/password");
  }
  return (
    <div>
      <h3>Login</h3>
      <div>
        <label>Login</label>
        <input type="text" ref={lref}></input>
      </div>
      <div>
        <label>Password</label>
        <input type="password" ref={pref}></input>
      </div>
      <div>
        <p>{msg}</p>
      </div>
      <div>
        <button onClick={doLogin}>Next</button>
      </div>
    </div>
  );
}
