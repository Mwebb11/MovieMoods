var connection = require('../config/connection.js')

module.exports = function(app, passport) {
  app.get("/api/getall/", function(req, res) {
    var queryString = `SELECT * FROM user_data`
    connection.query(queryString, function(dbResponse){
      console.log(dbResponse)
    })
  });
  //LOGIN USER
  app.post('/api/user',function(req,res){
      let user = req.body.username;
      let pw = req.body.password;
      var queryString = `SELECT * FROM user_data WHERE User_Name=? AND Pass_Word=?`
      connection.query(queryString,[req.body.username,req.body.password],function(errors, results, fields){
        console.log("Response", results);
        res.json(results)
      })
  });
  app.post("/api/posts/:user/:movie/:age/:language", function(req, res) {
    var queryString = `INSERT INTO user_data VALUES ????`;
    connection.query(
      queryString,
      [{
        user: req.params.user,
        movie: req.params.movie,
        age: req.params.age,
        language: req.params.language
      }],
      function(error, results, fields){
        console.log('POST NEW USER RESPONSE: ', results)
      }
    )
  });

  app.get("/api/saved/:id", function(req, res) {
    const id = req.params.id;
    var queryString = `SELECT * FROM user_data WHERE id = ${req.params.id}`
    connection.query(
      queryString,
      function(dbResponse){
        console.log('GET USER OF SPECIFIC ID: ', dbResponse)
      }
    )
  });

  app.put("/api/updatesaved/:id/:movie", function(req, res) {
    var queryString = `UPDATE user_data SET All_Time_Favorite_Movie='${req.params.movie}' WHERE id=${req.params.id}`
    connection.query(
      queryString,
      function(dbResponse){
        console.log('UPDATE MOVIE OF SPECIFIC ID: ', dbResponse)
      }
    )
  });

  app.delete("/api/deleteUser/:id", function(req, res) {
    var queryString = `DELETE FROM user_data WHERE id=${req.params.id}`
    connection.query(
      queryString,
      function(dbResponse){
        console.log('DELETE USER OF SPECIFIC ID: ', dbResponse)
      }
    )
  });
}
