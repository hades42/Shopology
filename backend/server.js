const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;
const MODE = process.env.NODE_ENV;
app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));
