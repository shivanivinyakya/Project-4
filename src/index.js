const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/shivanijain4-DB?authSource=admin&replicaSet=atlas-9zusex-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", { useNewUrlParser: true})
.then(() => console.log("MongoDb is connected 27017"))
.catch(err => console.log(err))
 

const PORT = process.env.PORT || 3000
app.use('/', route);
app.listen(PORT, () => console.log(`Expredd app running on port ${PORT}`))



// app.listen(process.env.PORT || 3000, function () {

//     console.log('Express app running on port ' + (process.env.PORT || 3000))

// });