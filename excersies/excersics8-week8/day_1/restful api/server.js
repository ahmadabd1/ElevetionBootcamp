const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());

let users = [
    { id: 1, name: 'Alice', age: 30 , isActive: true},
    { id: 2, name: 'Bob', age: 25 , isActive: false},
    { id: 3, name: 'Charlie', age: 35 , isActive: true},
    { id: 4, name: 'Diana', age: 28 , isActive: true},
    { id: 5, name: 'Edward', age: 40 , isActive: false}
  ];
  
  let animals = [
    { id: 1, type: 'Dog', name: 'Rex' },
    { id: 2, type: 'Cat', name: 'Whiskers' },
    { id: 3, type: 'Bird', name: 'Tweety' },
    { id: 4, type: 'Fish', name: 'Goldie' },
    { id: 5, type: 'Hamster', name: 'Fuzzy' }
  ];


// List all users 
app.get('/users', (req, res) => res.status(200).send({users:users}));

// Get a user by ID 
app.get('/UsersById', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.body.id));
  user ? res.status(200).send(user) : res.status(404).send('User not found');
});

// Search users by name 
app.get('/UsersByName', (req, res) => {
  const { name } = req.body.name;
  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
  filteredUsers ? res.status(200).send(filteredUsers) : res.status(404).send('User not found');
});

// Add a new user 
app.post('/NewUsers', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).send(newUser);
});

// Update a user 
app.put('/Users', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.body.id));
  if (user) {
    Object.assign(user, req.body);
    res.status(204).send(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete a user 
app.delete('/Users', (req, res) => {
 const users = users.filter(user => user.id !== parseInt(req.query.id));
 users ? res.status(204).send('User removed'): res.status(404).send('User not found')
});

// List all animals 
app.get('/Animals', (req, res) => res.status(200).send({animals:animals}));

// Get a specific animal by ID 
app.get('/AnimalsById', (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.body.id));
  animal ? res.status(203).send(animal) : res.status(404).send('Animal not found');
});

// Add a new animal 
app.post('/NewAnimal', (req, res) => {
  const newAnimal = { id: animals.length + 1, ...req.body };
  animals.push(newAnimal);
  res.status(201).json(newAnimal);
});

// Update an animal 
app.put('/Animals', (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.body.id));
  if (animal) {
    Object.assign(animal, req.body);
    res.status(204).send(animal);
  } else {
    res.status(404).send('Animal not found');
  }
});

// Delete an animal 
app.delete('/Animals', (req, res) => {
  const animals = animals.filter(animal => animal.id !== parseInt(req.query.id));
  animals ? res.status(204).send('Animal removed'):res.status(404).send('User not found')
});

// Increment User's Age 
app.put('/UserAges', (req, res) => {
    const userId = req.body.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
      user.age += 1;
      res.status(204).send(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  
  // Filter Animals by Type 
  app.get('/AnimalsByType', (req, res) => {
    const { type } = req.query.type;
    const filteredAnimals = animals.filter(animal => animal.type.toLowerCase() === type.toLowerCase());
    filteredAnimals ? res.status(200).send(filteredAnimals):res.status(404).send('Animal not found');
  });
  
  // Change Animal's Name 
  app.put('/animalsNameChange', (req, res) => {
    const { id, newName } = req.body;
    const animal = animals.find(a => a.id === parseInt(id));
    if (animal && newName) {
      animal.name = newName;
      res.status(201).send(animal);
    } else {
      res.status(404).send('Animal not found or new name not provided');
    }
  });
  
  // List Users in a Certain Age Range 
  app.get('/UsersByAge', (req, res) => {
    const { minAge, maxAge } = req.body;
    const filteredUsers = users.filter(user => user.age >= minAge && user.age <= maxAge);
    filteredUsers ? res.status(200).send(filteredUsers):res.status(404).send('User not found');
  });
  
  // Toggle User's Active Status 
  app.put('/userActiveStatusToggle', (req, res) => {
    const userId = req.body.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
      user.isActive = !user.isActive;
      res.status(204).send(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  

app.listen(3000, () => console.log('Server running on port 3000'));