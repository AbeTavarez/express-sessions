const express = require("express");
const morgan = require("morgan");
const db = require('./utils/db');



// ===== Constants ===== //
const app = express();
const PORT = process.env.PORT || 8080;


// ===== Middlewares ===== //
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));


// ===== Routes ===== //
/**
 * @method GET
 * @route /
 * @description Root route
 */
app.get('/', (req, res) => {
    res.send('server is up!');
});

// Mounted Routes ========================== //
app.use('/api/auth', require('./routes/auth'))



// ===== Main ===== //
db();
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));