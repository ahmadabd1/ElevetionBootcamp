const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
const lightFunc = () =>console.log("be ready")
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")

  
// const run = (name) => {console.log("Run, " + name + ", run!")}
// const yell = function(action){
//     let env = "Forest"
//     action(env)
// }
// run(yell)