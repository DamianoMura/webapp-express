const db_connection = require("../resources/db/db.js");



const index = (req,resp) => {
  resp.send("index");
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