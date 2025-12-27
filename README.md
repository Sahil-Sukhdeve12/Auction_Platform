# Auction-Platform

frontend (client)
i initialize by writing npm create vite@latest then selected react as framework,variant=javascript


backend(server)
create .env to store port no
npm init -y (to initialize) then creates package.json
now time to install express,moongose,dotenv,cors

| Package  | Purpose                        |
| -------- | ------------------------------ |
| express  | Server & APIs                  |
| mongoose | Talk to MongoDB                |
| dotenv   | Read `.env` file               |
| cors     | Allow frontend to call backend |

npm install --save-dev nodemon
Purpose:
Auto-restart server on changes
Later you’ll add a script for it.


package.json contains descriptive & functional metadata about project such as name,version & dependencies.
port -> logical endpoints of a network connection that is used to exchange information between a web server & web client.(interchanging data b/w server & client)
routing->it is process of selecting a path for traffic in a network.

mongoose.model()->it converts a schema into a usable model that can talk to mongodb.
ObjectId->it is mongodb's unique identifier for each document.
ref tells mongoose which collection this objectid belongs to.

transaction records-> stores every action separate instead of updating one document repeatedly."# Auction-Platform" 
"# Auction_Platform" 
