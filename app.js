import disney from "./disney.json" assert { type: "json" };
import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/characters", (req, res) => {
  console.log(req.query.name);

  if (req.query.name) {
    const result = disney.filter((oneCharacter) => {
      return oneCharacter.name
        .toLowerCase()
        .includes(req.query.name.toLowerCase());
    });
    return res.json(result);
  }
  res.json(disney);
});

app.get("/characters/:_id", (req, res) => {
  //get the info
  const { _id } = req.params;
  //search into
  const commeTuVeux = disney.find((ele) => {
    return ele._id === Number(_id);
  });
  //condition
  if (commeTuVeux) {
    //si c'est bon jte donne
    res.json(commeTuVeux);

    // si c'est pas bon jte donne pas
  } else {
    res.json({ message: "No character found!" });
  }

  console.log(req.params);
  console.log("lalalal");
});
app.post("/characters", (req, res) => {});

app.listen(port, () => console.log("App listening on port 3000!"));
