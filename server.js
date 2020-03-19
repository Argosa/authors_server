const express = require('express');
const cors = require('cors');
const app = express();

require("./server/config/mongoose.config");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

require("./server/routes/authors.route")(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});