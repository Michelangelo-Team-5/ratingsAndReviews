# Problem Solvign Process

## Keep track of your problem solving process notes here!

- Track your current goal.
- Break down the problem for each piece of the problem you are trying to solve.
- Track all of your thinking and work.

___ START THE SERVER/APP
- npm install
- npm run build
- npm run watch
- npm start

## Build Server endpoints

| read all cow data
    GET
     `/api/cows`

     res | `[{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]`

| create new cow data
     POST

       res | `{name: 'Milkshake', description: '...'}` | creates new record in database | `{name: 'Milkshake', description: '...'}` |


- test end points with post man

#1
- get route /api/cows
- console.log/postman to test

#2
- post route /api/cows
- console.log/postman to test