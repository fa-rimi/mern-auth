const express = require("express");
const connectDB = require("./config/connectDB"); // ? I initially used an import statement just to keep a similar flow from front-end but it was not recognizing the path -- i had to remove type module from my package.json and use req instead
// Todo: Look into why this didn't work ^^

// dotenv: Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("And we are live!");
});

(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Express is running on localhost:${port}`);
    });
  } catch (error) {
    console.log("Server failed to start:", error);
  }
})();
