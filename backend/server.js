const app = require("./app.js");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

//config 
dotenv.config({path:"backend/config/config.env"});

//connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
});

// Handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down server due to Uncaught Exception`);

    server.close(() => {
        process.exit(1);
    });
});


//unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down server due to unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    });
});