// express服务搭建
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
  if (req.header("x-forwarded-proto") !== "https") {
    res.redirect("https://" + req.header("host") + req.baseUrl);
  } else {
    next();
  }
});
// console.log(path.join(__dirname, "build/app.bundle.js"));
app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "html.index"));
});

app.listen(port);
