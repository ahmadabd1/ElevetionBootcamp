import logo from './logo.svg';
import './App.css';




export function AboutUs() {
  return <p>This is an example of an about us page~</p>
}

export function Sum() {
  let num1 = 10
  let num2 = 50
  return (<div className='App'>the sum is : {num1 + num2}</div>)
  // your code here...
}


export function Nav() {
  return (
    <div id="nav"><span>Home</span><span>About</span></div>
  )
}
export function LandingPage() {
  return (
      <h1>Welcome</h1>
  )
}

export function App() {
  let isUserLoggedIn = localStorage.getItem('loggedIn')
  let componentToDisplay = isUserLoggedIn ?
      <LandingPage /> :
      <AboutUs />

  return (
      <div className="app">
          <Nav />
          {componentToDisplay}
      </div>
  )

  // return (
  //   <div className="app">
  //     <Sum />
  //     <Nav /> {/* loading a child component */}
  //     <LandingPage />
  //   </div>
  // );
}

export default App;
