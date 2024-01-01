// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test-db');

db.firstCollection.aggregate([
    { $match: { currentEmployee: true } },
    {
        $group:
        {
            _id: "$dept",
            totalSalaries: { $sum: "$salary" }
        }
    },
    { $sort: { totalSalaries: -1 } }
])



// db.firstCollection.find({})