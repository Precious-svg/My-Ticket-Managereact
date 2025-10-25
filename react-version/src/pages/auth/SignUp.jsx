import React, {useState, useEffect} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPass] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()
  
  const userData = {
    firstName, lastName, email, password
  }
  const isFormValid = () => {
    let valid = true;
    const errorMsgArray = []

    if(!firstName.trim()){
      errorMsgArray.push("First name cannot be blank!");
      valid = false;
    }

    if(!lastName.trim()){
      errorMsgArray.push("Last name cannot be blank!");
      valid = false;
    }
    if(!password.trim()){
      errorMsgArray.push("Password is required!")
      valid = false;
    }else if(password.length < 6){
      errorMsgArray.push("Password is too short!")
      valid = false;
    }
    
    if(password !== confirmPassword){
      errorMsgArray.push("Password must match!")
      valid = false;
    }

    if(errorMsgArray.length > 0){
      setErrorMsg(prev => errorMsgArray[0])
      valid = false
    }
    valid = true;

  }

  const handleSignup = (e) => {
    e.preventDefault()

    if(isFormValid){
      localStorage.setItem("ticketapp_user", JSON.stringify(userData))
      navigate('/auth/login')
      const stored = localStorage.getItem("ticketapp_user")
      console.log("is stored:", stored)
    }
  }
  return (
    <div>
       <header>
          <h3>Fill the for to create an account</h3>
       </header>

       <main>
          <form onSubmit={handleSignup}>
            <div>
              <label htmlFor='firstName'>
                First Name
              </label>

              <Input type="text" name={firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='lastName'>
                Last Name
              </label>

              <Input type="text" name={lastName} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>

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

            <div>
              <label htmlFor='password'>
               Confirm Password
              </label>

              <Input type="text" name={confirmPassword} value={confirmPassword} onChange={(e) => setConfirmPass(e.target.value)}/>
            </div>

            {errorMsg && (
              <p className='text-red'>{errorMsg}</p>
            )}
            <Button type="submit">Sign up</Button>
          </form>
       </main>
    </div>
  )
}

export default SignUp