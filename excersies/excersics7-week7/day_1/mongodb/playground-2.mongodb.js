// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

// Create a new document in the collection.
// db.firstCollection.insert({
//     _id:1454,
// name: "abo ali"
// })
// db.createCollection("Recipes")


// db.details.renameCollection("firstCollection")

// db.firstCollection.insert({
//     currentBalance :1454,
//     accountDetails : {
//         fullName  :"abo ali",
//         accountNumber : 1
//     }
//     })
// db.firstCollection.insert({ name: "Louise", salary: 1200 })
// db.firstCollection.insert({ name: "Rayna", salary: 2300 })
// db.firstCollection.insert({ name: "Soren", salary: 1500 })
// db.firstCollection.insert({ name: "Loreli", salary: 800 })
// db.firstCollection.insert({ name: "Milo", salary: 950 })
// db.firstCollection.insert({ name: "Brendon", salary: 1100 })

// db.firstCollection.find({
//     name: "Milo"
// })

// db.firstCollection.find({
//     salary:{
//         $gt: 1200 //grreat  than
//     }
// })

// db.firstCollection.find(    //query starts here
//     {                       //filter starts here
//         salary: {
//             $gt: 1200
//         }
//     },                      //filter ends here
//     {                       //projection starts here
//         name: 1,
//         _id: 0
//     }                       //projection ends here
// )

// db.firstCollection.insert({
//     name: "Razu",
//     hometown: {
//         city: "Razuville",
//         country: "Razuland"
//     },
//     hobbies: ["Razu-ing", "Razu Surfing", "Razu Cooking"]
// })                    //query ends here


// db.firstCollection.update(
//     {
//         name: "Milo"
//     },
//     {
//         $set:
//             {
//                 lastName: "Shakers"
//             }
//     }
// )
// db.firstCollection.update(
//     {
//         name: "Loreli"
//     },
//     {
//         $set:
//             {
//                 salary: 1050
//             }
//     }
// )

// db.firstCollection.find(    //query starts here
//     {                       //filter starts here
//         name: "Razu"
//     } ,
//     {
//         "hometown.city": 1
    
//     }                  //filter ends here
//                          //projection ends here
// )  
// its will delete all 
// db.firstCollection.remove({
//     name: "Rayna"
// })
// its will delete the first one in query
// db.firstCollection.remove(  
//     {
//         name: "Rayna"
//     }, 
//     true
// )

// db.firstCollection.update(  
//     {name: "Razu"}, 
//     {$push: {
//         hobbies: "Razu-Ball"
//     }}
// )
// db.firstCollection.update(  
//     {name: "ahmad"}, 
//     {
//         $push: {
//             dreams: "BMW CArs"
            
//         },
//         $push: {
//             dreams: "to be rich"
            
//         }
//     }
// )
// db.firstCollection.insert({
//     name: "Soren"
// })
// //First update so Soren has dreams:

// db.firstCollection.update(  
//     {name: "Soren"}, 
//     {$set: {
//         dreams: []
//     }}
// )

// //Then push many dreams at once using $each:

// db.firstCollection.update(  
//     {name: "Soren"}, 
//     {$push: {
//         dreams: {
//             $each: ["Being like Razu", "Breaking the glass floor"]
//         }
//     }}
// )
// db.firstCollection.update(  
//     {name: "Soren"}, 
//     {$pull: {
//         dreams: "Being like Razu"
//     }}
// )

// db.firstCollection.update(  
//     {name: "Soren"}, 
//     {$pop: {
//         dreams: -1
//     }}
// )
// db.firstCollection.find({
//     $and:[
//         {salary: {$gt: 1000}},
//         {salary: {$lt: 1500}}
//     ]
// })
// db.firstCollection.insert({name: "Spore", hobbies: ["Running", "Hip Hop", "Basketball", "Soccer"]})
// db.firstCollection.insert({name: "Daniel", hobbies: ["Hip Hop", "Ballet", "Salsa", "Running"]})
// db.firstCollection.insert({name: "Beckie", hobbies: ["Reading", "Running", "Hip Hop", "Writing", "Debate", "Philosophy"]})
// db.firstCollection.insert({name: "Dugg", hobbies: ["Philosophy", "Psychology"]})


// db.firstCollection.find({
//     hobbies: "Philosophy"
// })

// db.firstCollection.count({
//     salary:{
//         $lt: 1200
//     }
// })

// db.firstCollection.find({
//     salary:{
//         $gt: 200
//     }
// }).limit(2)

// db.firstCollection.find({}).sort(
//     {
//         salary: -1
//     }).limit(3)

// db.firstCollection.aggregate([
//     { $group: 
//        { _id: null, 
//        totalSalaries: { $sum: "$salary" } } }
//   ])



db.firstCollection.insert({ name: "Louise", dept: "Finance", salary: 1200 , currentEmployee:true })
db.firstCollection.insert({ name: "Rayna", dept: "R&D", salary: 2300, currentEmployee:true })
db.firstCollection.insert({ name: "Soren", dept: "Finance", salary: 1500 , currentEmployee:false})
db.firstCollection.insert({ name: "Loreli", dept: "Sales", salary: 800, currentEmployee:false })
db.firstCollection.insert({ name: "Milo", dept: "Sales", salary: 950, currentEmployee:true })
db.firstCollection.insert({ name: "Brendon", dept: "Finance", salary: 1100, currentEmployee:false })

// db.firstCollection.aggregate([
//     { $group: 
//        { _id: "$dept", 
//        totalSalaries: { $sum: "$salary" } } }
//   ])

// db.firstCollection.aggregate([
//     { $group: 
//        { _id: "$dept", 
//        totalSalaries: { $sum: 1 } } }
//   ])

// db.firstCollection.remove({})
// db.firstCollection.find({})
