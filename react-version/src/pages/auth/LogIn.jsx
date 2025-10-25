import React, {useState, useEffect} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const storedData = JSON.parse(localStorage.getItem("ticketapp_user"))
    

    const handleLogin = (e) => {
        e.preventDefault();
        if(!email || !password){
            setError("All fields are required!")
            return;
        }

        if(!storedData){
            console.log("{this user does not exist");
            navigate("/");
            return;
        }

        if(email.trim() === storedData.email && password.trim() === storedData.password){
            localStorage.setItem("ticketapp_session", "token@1234");
            console.log("log in successful")
            const storedToken = localStorage.getItem("ticketapp_session")
      console.log("is stored token:", storedToken)
            navigate("/dashboard")
        }else{
            console.log("Invalid email or password!")
            navigate("/")
        }
       

    }
  return (
    <div>
        <form onSubmit={handleLogin}>
        <div>
              <label htmlFor='email'>
                Email
              </label>

              <Input type="email" name={email} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='password'>
                Password
              </label>

              <Input type="text" name={password} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>


            <Button type="submit">Login</Button>
        </form>
    </div>
  )
}

export default LogIn