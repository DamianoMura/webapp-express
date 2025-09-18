const db_connection = require("../resources/db/db.js");



const index = (req,resp) => {
  //index for movies/
  
  const query= `
    SELECT *
    FROM movies`;
  db_connection.query(query,(err,results)=>{
    if(err){
      return resp.status(500).json({error: "query failed"})
    }
    return resp.json(results);
  })  
}
const show = (req,resp) => {
  resp.send("show");
}
const create = (req,resp) => {
  resp.send("create");
}
const modify = (req,resp) => {
  resp.send("modify");
}
const update = (req,resp) => {
  resp.send("update");
}
const destroy = (req,resp) => {
  resp.send("destroy");
}

module.exports={
  index,
  show,
  create,
  modify,
  update,
  destroy
}