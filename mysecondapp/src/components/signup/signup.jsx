import { useEffect, useState } from "react"

export function Signup() {
    let [user, setUser] = useState({fname:'',email:''});
    let [msg, setMsg] = useState('');
    
    useEffect(()=>{
        console.log('SignIn Updated...(msg+user)');
    },[msg,user]);

    useEffect(()=>{
        console.log('SignIn Mounted...')
    },[])
    useEffect(()=>{
        return ()=>{
            console.log('SignIn Unmounted...')
        }
    },[])

   

    function formChanged(e) {
    setUser({...user,[e.target.name]:e.target.value})
    }
    
    function doSignup() {
        if (user.fname == '' || user.email == '')
            setMsg('Full Name / Email Required');
        else
            setMsg('Thank You ' + user.fname);
    }
    return (
        <div>
            <h3>SignUp</h3>
            <div>
                <label>Full Name</label>
                <input name="fname" onChange={formChanged}></input>
            </div>
            <div>
                <label>Email</label>
                <input name="email" onChange={formChanged}></input>
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