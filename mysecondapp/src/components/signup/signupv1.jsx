import { useState } from "react"

export function Signup() {
    let [fname, setFname] = useState('');
    let [email, setEmail] = useState('');
    let [msg, setMsg] = useState('');

    function fnameChanged(e) {
        setFname(e.target.value);
    }
    function emailChanged(e) {
        setEmail(e.target.value);
    }
    function doSignup() {
        if (fname == '' || email == '')
            setMsg('Full Name / Email Required');
        else
            setMsg('Thank You ' + fname);
    }
    return (
        <div>
            <h3>SignUp</h3>
            <div>
                <label>Full Name</label>
                <input name="fn" onChange={fnameChanged}></input>
            </div>
            <div>
                <label>Email</label>
                <input name="em" onChange={emailChanged}></input>
            </div>
            <div>
                <p>{msg}</p>
            </div>
            <div>
                <button onClick={doSignup}>SignUp</button>
            </div>
        </div>
    )
}