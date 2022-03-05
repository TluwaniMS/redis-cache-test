const { UserModel } = require("../database-models/User");

const getAllUser = async () => {
  const users = await UserModel.find({});

  return users;
};

const getUserById = async (userId) => {
  const user = await UserModel.findOne({ _id: userId });

  return user;
};

const deleteUserById = async (userId) => {
  await UserModel.deleteOne({ _id: userId });

  return `Operation completed successfully.`;
};

const updateUserById = async (userId, userInfo) => {
  await UserModel.updateOne(
    { _id: userId },
    { name: userInfo.name, surname: userInfo.surname, age: userInfo.age, gender: userInfo.gender }
  );

  return `Operation completed successfully.`;
};

const createUser = async (userInfo) => {
  await UserModel.create({
    name: userInfo.name,
    surname: userInfo.surname,
    age: userInfo.age,
    gender: userInfo.gender
  });

  return `Operation completed successfully.`;
};

const createMultipleUsers = async (usersArray) => {
  await UserModel.insertMany(usersArray);

  return `Operation completed successfully.`;
};

module.exports = { getAllUser, getUserById, deleteUserById, updateUserById, createUser, createMultipleUsers };
