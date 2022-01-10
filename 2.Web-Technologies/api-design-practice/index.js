const express = require("express");
const bodyParser = require("body-parser");
const connectionDB = require("./models/db.js");
const User = require("./models/UserModel.js");

const app = express();

app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  try {
    const Users = await User.find({});
    res.status(200).json({
      status: true,
      title: "Users List",
      users: Users,
    });
  } catch (err) {
    res.status(400).json({
      errorMessage: "Not found",
      status: false,
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    const new_User = await new User();
    // new_User.id = req.body.id;
    new_User.name = req.body.name;
    new_User.email = req.body.email;
    new_User.password = req.body.password;

    new_User.save((err) => {
      if (err) {
        res.status(400).json({
          errorMessage: err,
          statusCode: 400,
          status: false,
        });
      } else {
        res.status(200).json({
          status: true,
          statusCode: 200,
          title: "User Created",
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      errorMessage: err,
      statusCode: 400,
      status: false,
    });
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const update_user = await User.findByIdAndUpdate(req.params.id, req.body);
    update_user.save((err) => {
      if (err) {
        res.status(400).json({
          errorMessage: err,
          statusCode: 400,
          status: false,
        });
      } else {
        res.status(200).json({
          status: true,
          statusCode: 200,
          title: "User Updated",
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      errorMessage: err,
      statusCode: 400,
      status: false,
    });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const delete_user = await User.findByIdAndDelete(req.params.id, req.body);

    if (!delete_user) {
    }
    res.status(200).json({
      status: true,
      statusCode: 200,
      title: "User Deleted",
    });
  } catch (err) {
    res.status(400).json({
      errorMessage: err,
      statusCode: 400,
      status: false,
    });
  }
});

app.listen(8080, () =>
  console.log(`Server started on port: http://localhost:8080`)
);

connectionDB;
