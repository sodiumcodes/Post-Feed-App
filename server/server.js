//needed to start the server
import 'dotenv/config'; //this should be first because
//ES Modules load imports immediately. So dotenv must run before anything else that reads process.env.
import app from './src/app.js';
import Connection from './config/db.js';

//when Connection is created using Promise syntax, you dont have to call it explicitly

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})