const { Thought, User } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .populate({
        path: "friends",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((UserData) => res.json(UserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
    },

    // get one user by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .populate({
          path: "friends",
          select: "-__v",
        })
        .select("-__v")
        .then((UserData) => {
          if (!UserData) {
            return res.status(404).json({ message: "No user with this id!" });
          }
          res.json(UserData);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(400);
        });
    },

    // create user
    createUser({ body }, res) {
      User.create(body)
        .then((UserData) => res.json(UserData))
        .catch((err) => res.json(err));
    },


    // update user by id
    updateUser({ params, body }, res) {
      User.findOneAndUpdate({_id: params.id}, body, {
        new: true,
        runValidators: true,
      })
        .then((UserData) => {
          if (!UserData) {
            return res.status(404).json({ message: "No user with this id!" });
          }
          res.json(UserData);
        })
        .catch((err) => res.json(err));
    },

      
        // delete user
        deleteUser(req, res) {
          User.findOneAndDelete({ _id: req.params.userId })
            .then((dbUserData) => {
              if (!dbUserData) {
                return res.status(404).json({ message: "No user with this id!" });
              }
      
              // BONUS: Get ids of user's `thoughts` and delete them all
              return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
            })
            .then(() => {
              res.json({ message: "User and associated thoughts deleted!" });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
        },

        // add friend
        addFriend({ params }, res) {
          User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { friends: params.friendId } },
            { new: true, runValidators: true }
          )
            .then((UserData) => {
              if (!UserData) {
                return res.status(404).json({ message: "No user with this id!" });
              }
              res.json(UserData);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
        },

        // remove friend
        removeFriend({ params }, res) {
          User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
          )
            .then((UserData) => {
              if (!UserData) {
                return res.status(404).json({ message: "No user with this id!" });
              }
              res.json(UserData);
            })
        },
      };

module.exports = userController;