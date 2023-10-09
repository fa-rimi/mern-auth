const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB"); // ? I initially used an import statement just to keep a similar flow from front-end but it was not recognizing the path -- i had to remove type module from my package.json and use req instead
// Todo: Look into why this didn't work ^^

// dotenv: Load environment variables
dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // extended: true -> because I will be using multiple schemas (embedded schemas)

// Serve static files from the "dist" directory
const distPath = path.join(__dirname, "../client/dist");
app.use(express.static(distPath));

/**-----------------|
 **Catch All Route* |
 * -----------------|
 *
 * For all other requests that do not have a distinct route, serve the 'index.html' file
 */
app.get("/*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
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
