import { useState } from "react";
import './users.css';
import  Axios from "axios";
export function Users(){
    let [users,setUsers] = useState([]);

    function getData(){
     let url='https://jsonplaceholder.typicode.com/users';
        Axios.get(url).then((res)=>{
            setUsers(res.data);
        });    
    }
    function fetchData(){
        let url='https://jsonplaceholder.typicode.com/users';
        fetch(url).then(res => res.json()).then((data)=>{
            setUsers(data);
        });
    }
    return (
        <div>
            <h3>Users</h3>
            <button onClick={fetchData}>Fetch Data</button>
            <button onClick={getData}>Axios Data</button>
            <table width='800px'>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Username</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {users.map(u => <tr key={u.id}><td>{u.id}</td><td>{u.name}</td><td>{u.username}</td><td>{u.email}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}