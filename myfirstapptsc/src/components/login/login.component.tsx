import {  useRef, useState } from "react";
import { LoginService } from "./login.service";
import { useNavigate } from "react-router";

export function Login() {
  let lref:any = useRef("");
  let pref:any = useRef("");
  let [msg, setMsg] = useState("*******");
  let nav = useNavigate();

  if(sessionStorage.getItem('user')!=null)
    {
//      alert(sessionStorage.getItem('user'));
      nav('/');
      return;
    }

  function doLogin() {
    if (LoginService.checkLogin(lref.current.value, pref.current.value))
     {
      //setMsg("Welcome " + lref.current.value);
      sessionStorage.setItem('user',btoa(lref.current.value));
      nav('/');
     }
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
