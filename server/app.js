const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const routers = require("./routers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routers);

app.listen(port, () => {
  console.log(`SERVER is running on port : ${port}`);
});
