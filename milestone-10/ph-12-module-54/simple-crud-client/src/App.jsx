
import './App.css'
import User from './components/user'

const usersPromise = fetch('http://localhost:3000/users').then(res => res.json());

function App() {


  return (
    <>
     
      <h1>Vite + React</h1>
      <User usersPromise={usersPromise}></User>
     
    </>
  )
}

export default App
