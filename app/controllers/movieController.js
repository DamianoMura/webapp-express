const db_connection = require("../data/db.js");



const index = () => {
  console.log("index");
}
const show = () => {
  console.log("show");
}
const create = () => {
  console.log("create");
}
const modify = () => {
  console.log("modify");
}
const update = () => {
  console.log("update");
}
const destroy = () => {
  console.log("destroy");
}

module.exports={
  index,
  show,
  create,
  modify,
  update,
  destroy
}