var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home-index/home.html"));
  });
  app.get("/home", function(req,res){
    res.redirect('/');
  })
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile-index/index.html"));
  });
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results-index/index.html"));
  });
  app.get("*", function(req, res) {
    res.redirect('/');
  });
};
