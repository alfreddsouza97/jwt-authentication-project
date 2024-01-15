## Authentication using JSON Web Token [JWT]

This project contains a basic Authentication project using JSON Web Tokens.
It is written in JavaScript, and uses Express.JS, Node.JS and JSON and JSON Web Tokens

## Features

 - It uses a in-memory database of users stored in ALL_USERS variable.
 - Currently, two user credentials are added - Alfred & Alfa are two users.
 - The code logic assumes that these people have an account registered with the service provider.
 - Everytime, a user enters his credentials, he is given a unique token on his successful login. 
 - To Sign in, a user has to go to localhost:3000/signin and  then send a POST Request using PostMan Application. Please check the code to see registered users, you can even add more registered users by making changes in ALL_USERS variable.
 - Syntax to send a sign in request 
 {

  "username": "alfa@gmail.com",

"password": "0000"

  }
 - If Sign in is successful, the code returns a unique JWT Token which is a long string. The returned Token may look like this ----
 {

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsZmFAZ21haWwuY29tIiwiaWF0IjoxNzA1MzI4NDkwfQ.IUAY489CFpTtnfGXBIvvd7wyyTropvDoZN2M0O3TusU"

}
 - Code is written on the backend to obtain a different token for every Sign-in request. 
 - To create a token , a password is used which can be found as jwtPassword in the backend code.  Only username is tokenized here as jwt string can be decoded by anyone, for instance, if you copy paste the obtained jwt string, you can see the tokenized username on the jwt.io website. You would not want anyone's password to be decoded easily.
 - It's not a good idea to Tokenize user Password.
 - Before sending the GET request, pass in the obtained token into the headers in the PostMan Application :
key will be authorization 
value will be token which you got while signing in...
 - GET request can be sent to localhost:3000/users
 - Code is written to verify the token to see if it  is created with the same JWT Password as the one written on the backend server.
 - Upon successful verification, logic can be implemented to carry out various tasks like giving an user access to his subscription or giving him access to a free service that needs a Sign-In.
 - But, here we have only displayed  decoded data obtained from a JWT Token, his username obtained from the decoded data is displayed.
 -  The details of other users except the signed-in user are displayed. 
 - PostMan will return the following JSON data on successful JWT Token verification.
  
 - 
 {
    "decode": {
        "username": "alfa@gmail.com",
        "iat": 1705328490
    },
    "username": "alfa@gmail.com",
    "otherUsers": [
        {
            "name": "Alfred",
            "username": "alfred@gmail.com",
            "password": "123456"
        }
    ]
}


Note:

 - HTTP server is created using Express.JS and the webpage can be
   accessed and all the incoming requests has to be directed to.
   
   localhost:3000/
   
 - PostMan Application is used to post[sign-in] and get[get user data].
 - Please make sure Node.JS is installed on your Computer
 - Open the folder with VS Code and write the command in the Terminal 
 -      npm install
 -  It will install the dependencies specified in package.json file
 -  Run the command 
 -      node index.js
 - It will deploy the code your local server and all incoming requests have to be directed to 
 -      localhost:3000/

Code Author -  

ALFRED MARSHALL DSOUZA
https://www.linkedin.com/in/alfred-d-92957988/

https://github.com/alfreddsouza97
