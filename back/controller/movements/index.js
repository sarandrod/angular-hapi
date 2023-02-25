const fs = require("fs");
const path = require("path");
const dbFile = path.join(__dirname, "../../data/db.json");

function getAllMovements(request, h) {
  try {
    const data = fs.readFileSync(dbFile);
    const db = JSON.parse(data);
    return db.movements;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function insertMovement(request, h) {
  try {
    const data = fs.readFileSync(dbFile);
    const db = JSON.parse(data);
    const newId = db.movements.length + 1;
    db.movements.push({ id: newId });
    fs.writeFileSync(dbFile, JSON.stringify(db));
    return db.movements;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getAllMovements, insertMovement };
