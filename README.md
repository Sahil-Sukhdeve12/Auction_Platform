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

transaction records-> stores every action separate instead of updating one document repeatedly.

express routers->groups related api endpoints together.
A controller handles request → logic → response.

A controller function is just a normal javascript function that express calls when an api endpoint is hit.
req->incoming request, res->response you send back

{createAuction}-> this means exporting as object.

Browser URL bar → GET
Creating data → POST

Postman is a tool to send HTTP requests manually to backend APIs.
Why we use it:
Browser only sends GET
Backend needs POST, PUT, DELETE
Industry-standard testing tool

When a POST request comes to:

POST /api/auctions

Backend should:
Read data from request body
Create a new Auction document
Save it in MongoDB
Return saved auction as response

req.body-> contains data sent by client in post request

index.js (Server Entry Point)
What this file does
Starts Express server
Adds middleware
Connects DB
Registers routes

populate() function in mongoose is used for populating the data inside the reference.
req.params->used to read url parameters.
_id is MongoDB’s unique identifier for every document.

controllers()->functions

async-await (bhai bhai)

404 error-> server could not find the requested webpage
400 error-> server cannot process the request because something is wrong with the client's send data.
201-> success
500-> server encountered unexpected error couldn't process/handle it

"implemented a complete auction lifecycle — creation, real-time bidding with validation, automatic expiry handling, and winner declaration — all backed by MongoDB with clean REST APIs.”
