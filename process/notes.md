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


## SETUP DATABASE

[X]#1
- connect to mysql
     ***ERROR
        - ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock'

        #FIX
           - mysql.server start
           - mysql -u root

note: what sets your schema sets mysql to this schema
- mysql -u root < server/schema.sql

[X]#2
- create Database

[X]#3
- create table

[X]#4
- database/index.js
- secure connection to db

[X]#5
- models/models.js
   ***TypeError: callback is not a function create((err, data) => ....

   #forgot to pass req.body into create(req.body, (err, data) => ....

## Front End

[X]- build component Cows to render all cows and manage state
----- make api call to get all cows in the database
----- store cows in the state
----- pass cows to cowlist
- build comoponent cowList to render a cow

[X]#6
- connect frontend to backend

[X]#7
- create add component
---- handleAdd component in App
---- pass handleAdd from App to Add component

[X]#8
- make api call to frontend to post new cow to database
-