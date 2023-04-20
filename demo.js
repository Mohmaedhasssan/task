import express from "express";




const app = express();

const students = [
  {
    id: 1,
    name: "Mohamed",
    age: 22,
    birthplace: "Alexandria",
  },
  { id: 2, name: "Mahmoud", age: 21, birthplace: "Beheira" },
  {
    id: 3,
    name: "Ahmed",
    age: 23,
    birthplace: "Tanta",
  },
  {
    id: 4,
    name: "karim",
    age: 21,
    birthplace: "Giza",
  },
  {
    id: 5,
    name: "Youssef",
    age: 21,
    birthplace: "Menofia",
  },
];

app.get("/students", (req, res) => {
  let output = "<ul>";

  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    output += "<li>" + student.name + "</li>";
  }

  output += "</ul>";

  res.send(output);
});

app.listen(5000);
