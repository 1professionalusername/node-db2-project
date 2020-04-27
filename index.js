
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const server = express()
const carsRouter = require("./cars/cars-router");

server.use(helmet());
server.use(express.json());
server.use(cors());
// endpoint is first parameter, second is carsRouter variable from above
server.use("/cars", carsRouter);






const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`\n=** Server is running on port ${port} **\n`);
});

// module.exports = server;