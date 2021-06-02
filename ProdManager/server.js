const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require("./server/config/mongoose.config")

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require("./server/routes/product.routes");
AllMyUserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
