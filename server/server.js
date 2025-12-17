import express from "express";
import cors from "cors";

import people from "./people.json" with { type: 'json' };

const app = express();
app.use(cors())

app.get('/ping', (req, res) => {
  res.send("pong")
})

app.get('/people', (req, res) => {
  res.json(people)
})

app.get('/people/:peopleId', (req, res) => {
  const personToFind = people.filter((person) => {
    return person.id == req.params.peopleId
  })

  res.send(personToFind)
})

app.listen(3000, () => {
  console.log(`Server is running on port: 3000`)
})
