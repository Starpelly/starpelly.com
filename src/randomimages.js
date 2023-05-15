const fs = require("fs");

const files = fs.readdirSync("static/assets/randomimages/");

export default files;