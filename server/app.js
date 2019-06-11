const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to atlas
const db = require("./config/keys").mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("mongo db has connected")
    )
    .catch(err => console.log(err));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));



const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server is running on port: " + PORT)
})
