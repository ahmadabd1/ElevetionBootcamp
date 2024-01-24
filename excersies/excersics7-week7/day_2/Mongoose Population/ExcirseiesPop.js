const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect("mongodb://127.0.0.1:27017/popEx", {
  useNewUrlParser: true,
})
.then(()=>console.log("conneted to DB"))
.catch((err)=> console.log(err))

const SolarSystemSchema = new Schema({ 
    planets : [{type: Schema.Types.ObjectId, ref: 'planet'}],
    starName : String,
    
  })
  
  const PlanetSchema = new Schema({ 
    name : String,
    system :{type: Schema.Types.ObjectId, ref: 'solarsystem'},
    visitors : [{type: Schema.Types.ObjectId, ref: 'visitors'} ]
  })
  
  const VisitorSchema = new Schema({ 
    name: String,
    homePlanet : {type: Schema.Types.ObjectId, ref: 'planet'},
    visitedPlanets : [{type: Schema.Types.ObjectId, ref: 'planet'}]
  })


const SolarSystem = mongoose.model("solarsystem", SolarSystemSchema)
const Planet = mongoose.model("planet", PlanetSchema)
const Visitors = mongoose.model("visitors", VisitorSchema)

let s1 = new SolarSystem({
    planets:[],
    starName:"rose"
})
let p1 = new Planet({
    name:"jore",
    system:s1,
    visitors:[]
})
let v1 = new Visitors({
    name:"ahmad",
    homePlanet:p1,
    visitedPlanets:[]
})
// s1.planets.push(p1)
// p1.visitors.push(v1)
// v1.visitedPlanets.push(p1)

// s1.save()
// p1.save()
//  v1.save()

// Planet.find({}).populate('visitors').then(vistes=>{
//     console.log(vistes)
// })


// Planet.find({}).populate('visitors').then(vistes=>{

//     vistes.forEach(v=>{console.log(v)})
// })

SolarSystem.find({}).populate({
            path: 'planets',
            populate: {
                path: 'visitors'
            }
        }).then(vistors => {
    
            console.log(vistors)
        }) 
