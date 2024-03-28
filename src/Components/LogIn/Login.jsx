import './Login.css'
import React ,{useState}from 'react'
import  {auth} from '../../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
function Login() {
  const [NewUser,setNewUser]= useState(true)
  const [username,setUsername]= useState("")
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()

  const[error,setError]=useState(false)
  const[errorMsg,setErrorMsg]=useState(false)

  const submit = (e)=>{
    e.preventDefault()
    setError(false)

    if(NewUser){
      createUserWithEmailAndPassword(auth,email,password)
      .then(()=>{
        localStorage.setItem("username",username)
      }).catch((error)=>{
        setError(true)
        const errorMessage = error.message;
        setErrorMsg(errorMessage)
      })
    }else{
        signInWithEmailAndPassword(auth,email,password)
        .catch((error)=>{
          setError(true)
          const errorMessage = error.message;
          setErrorMsg(errorMessage)
        })
    }
  }
  return (
    <div className='login-page'>
      <header>
        <span>from <i>Infinity Studios</i></span>
      </header>
      <img className='logo' src="https://cdn-icons-png.freepik.com/256/11522/11522711.png?uid=R98459826&ga=GA1.1.1114926933.1708955695&" alt="" />
   
   <h2 className='title'>
    Sub-Min <br />Dashboard
   </h2>
   <form onSubmit={submit} >

  { NewUser && (<div className="username">
      <input
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      type="text" id='text' required />
      <label htmlFor="email">username</label>
    </div>)}
    <div className="email">
      <input
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      type="email" id='email' required />
      <label htmlFor="email">email</label>
    </div>

    <div className="password">
      <input
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      type="password" id='password' required />
      <label htmlFor="password">Password</label>
    </div>

{error && (<img src="https://cdn-icons-png.freepik.com/256/12178/12178149.png?uid=R98459826&ga=GA1.1.1114926933.1708955695&"
className='status'
alt="" />)}
{error &&<span className='error'>Process Faild
<br />Please {NewUser?"Login You Have Already Account":"Sign up You have No Account "}</span>}
{error &&<span className='error'>{errorMsg?`${errorMsg}found`:""}</span>}

    <button type='submit'>{NewUser ? "Sign up":"Log in"}</button>
  
  {NewUser?<span className='user-stat'>
      Already have an account? <b onClick={()=>{
        setNewUser(false)
        setError(false)
      }}>Log in</b>
    </span>:
    <span className='user-stat'>
    Don't  have an account? <b  onClick={()=>{
        setNewUser(true)
        setError(false)
      }}>sign up</b>
  </span>}
    
    
   </form>
    </div>
  )
}

export default Login
