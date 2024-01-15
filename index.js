const express = require("express");

const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

const jwtPassword = "123456";



const ALL_USERS = [{

    name: "Alfred",

    username: "alfred@gmail.com",

    password: "123456"
}, {

    name: 'Alfa',

    username: "alfa@gmail.com",

    password: "0000"
}]

function userExists(username, password){

    let userExists = false;

    for(let i=0; i<ALL_USERS.length; i++){

        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){

            userExists = true;
        }
    }

    return userExists;
}

app.post('/signin', function(req,res){

    const username = req.body.username;

    const password = req.body.password;

    if(!(userExists(username, password))){

        res.status(403).json({msg: "User not found"})
    }

    const token = jwt.sign({username: username}, jwtPassword);

    res.json({token})


})

//get data only upon verification
app.get('/users', function(req, res){

    const token = req.headers.authorization;

    //Converts from JWT Token to normal
    const decode = jwt.verify(token, jwtPassword);

    const username = decode.username;

    res.json({

        //Print whats been decoded from JWT Token

        decode: decode,

        // Prints username from decoded data

        username: username,

        //Logic to print other users apart from the one who logged in....

        otherUsers: ALL_USERS.filter(function(value){

            if(value.username== username){

                return false;
            }

            else {

                return true;
            }
        })
    })
})

app.listen(3000);