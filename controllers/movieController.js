const db_connection = require("../resources/db/db.js");



const index = (req,res) => {
  //index for movies/
  console.log(res)
  const query= `SELECT * FROM movies`;
  db_connection.query(query,(err,results)=>{
    if(err) return res.status(500).json({error: "query failed"})
   const movies = results.map((movie)=>{
      return(
        {
          ...movie,
          image : req.imagePath+movie.image
        }
      )
    })
    res.send(movies)
  })  
}
const show = (req,res) => {
 
  const {id} = req.params;
   const query= `SELECT * FROM movies WHERE id = ?`;
  db_connection.query(query,[id],(err,results)=>{
    if(err) return res.status(500).json({error: "query failed" , id , err})
    if(results.length === 0) return res.status(404).json({error: "Film non trovato"})
    return res.json(results);
  })
}
const create = (req,res) => {
  resp.send("create");
}
const modify = (req,res) => {
  resp.send("modify");
}
const update = (req,res) => {
  resp.send("update");
}
const destroy = (req,res) => {
  const {id} = req.params;
   const query= `DELETE FROM movies WHERE id = ?`;
  db_connection.query(query,[id],(err)=>{
    if(err){
      return res.status(500).json({error: "query failed" , id , err})
    }
     res.sendtatus(204)
    
  }) 
}

module.exports={
  index,
  show,
  create,
  modify,
  update,
  destroy
}