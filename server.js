const express =require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(express.json()); // Add this to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const mongoose = require('mongoose')

const url = `mongodb+srv://phaveri:UxHAQmfoALMdvm51@cluster0.3c2joza.mongodb.net/ApnaCollege?retryWrites=true&w=majority&appName=Cluster0`;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
  
app.get('/',(req, res)=>{
    res.send('gtj')
})
const User = require("./Routes/Task/User")
const Task = require("./Routes/Task/Task")
const Category = require("./Routes/Task/Category")
app.use("/api",[User,Task,Category])
app.listen(port,()=>{
    console.log(`listening the port',${port}`)
})