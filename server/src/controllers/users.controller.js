const UserModel = require('../models/user.model');

const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send('Error getting users', error);
  }
};

usersController.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userFound = await UserModel.findById(id);
    if (!userFound) {
      return res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user' + error });
  }
};

usersController.createUser = async (req, res) => {
  const newUser = new UserModel({ ...req.body });
  //de ese modelo de datos, haces un user nuevo con el body de la peticion

  try {
    await newUser.save(); //inserto el cambio en la base de datos
    const allUsers = await UserModel.find(); //cuando se ha actualizado, dame lo que haya en la base de dtaos.
    res.status(200).send(allUsers);
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user' + error });
  }
};

usersController.updateUser = async (req, res) => {
  const { id } = req.params;
  // const newData = req.body;

  try {
    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });
    // Tienes 2 parametors: objeto id, busca el ususario cuyo _id sea igual al id, y haz un set de todo lo que te envie en el req.boy
    const allUsers = await UserModel.find(); //leo la lista de usuarios actualizados
    res.status(200).send(allUsers);
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user' + error });
  }
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.deleteOne({ _id: id });
    // Localizo el _id igual al id
    const allUsers = await UserModel.find(); //leo la lista de usuarios actualizados
    res.status(200).send(allUsers);
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user' + error });
  }
};

module.exports = usersController;
