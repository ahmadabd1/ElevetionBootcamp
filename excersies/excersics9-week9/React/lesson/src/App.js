import logo from './logo.svg';
import './App.css';



function App() {

  //EX - 1

  // let companies = [
  //   { name: "Tesla", revenue: 140 },
  //   { name: "Microsoft", revenue: 300 },
  //   { name: "Google", revenue: 600 }
  // ]
  // const showCompany = (name, revenue) => { 
  //   return(
  //     <div id={name}>{name} makes {revenue} every year</div>

  // )}

  // return (
  //   <div className="ex-space">
  //     <h4 className='ex-title'>Exercise 1</h4>
  //     <div className="exercise" id="ex-1">
  //       {companies.map((company)=>showCompany(company.name,company.revenue))}
  //     </div>
  //   </div>
  // )

  //EX - 2 
  const getClassName = (temperature) => { 
    if(temperature<15){
      return <div id="weatherBox" className="freezing"></div>
    }
    if(temperature>=15 && temperature<=30){
      return <div id="weatherBox" className="fair"></div>
    }
    return <div id="weatherBox" className="hell-scape"></div>
  }
  
  
  
  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {getClassName(-1)}
        {getClassName(70)}
        {getClassName(25)}
      </div>
    </div>
  )



  // let text = 'dynamically'

  // const getStuff = () => "helooo everyone111111111111111"


  // return (
  //   <div className="App">
  //     <h1>Going to display some text...{text}</h1>
  //     <div className="ex-space">
  //       <h4 className='ex-title'>Spot-check 1</h4 >
  //       <div className="exercise" id="spotcheck-1">
  //         <h1>{getStuff() }</h1>
  //       </div>
  //     </div>
  //   </div>
  // );
  // const personContainer = (name, email) => {

  //   let greatName = `The Great ${name}`
 
  //   return (
  //      <div className='person'>
  //        <h4>{greatName}</h4>
  //        <p>Contact at: <a href={email}>email</a></p>
  //      </div>
  //    )
  //  }

  // return (
  //   personContainer("Louisa", "l@elo.com")
  // );
  
  //spot check-2 

  // const getMorningGreeting = () => <div>Good Morning</div>
  // const getEveningGreeting = () => <div>Good Evening</div>
  // let isMorninig = new Date().getHours() < 12
  // return (
  //   <div>
  //     <div className="ex-space">
  //       <h4 className='ex-title'>Spot-check 2</h4 >
  //       <div className="exercise" id="spotcheck-2">
  //         {isMorninig ? getMorningGreeting() : getEveningGreeting()}
  //       </div>
  //     </div>
  //   </div>
  // )

  //spot check-3
  // return [
  //   getMorningGreeting(),
  //   getEveningGreeting(),
  //   <p>some text</p>
  // ]

}


export default App;
