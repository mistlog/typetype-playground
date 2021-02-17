const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(".").filter(each => each.endsWith(".type"));
files.forEach(each => {
    const name = each.replace(".type", ".json");
    const code = fs.readFileSync(each, "utf8");
    const data = { code };
    fs.writeFileSync(path.resolve(__dirname, `./${name}`), JSON.stringify(data), "utf8");
})