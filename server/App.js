const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { upload } = require("./middlewares/middlewares");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "upload successfully",
    filename: req.file ? req.file.originalname : null,
  });
});

app.use((req, res) => {
  res.json({ error: "no route found" });
});

app.listen(port, () => console.log(`server running on port ${port}`));
