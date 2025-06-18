const DessertModel = require('../models/dessert.model');

const dessertsController = {};

dessertsController.getAllDesserts = async (req, res) => {
  try {
    const allDesserts = await DessertModel.find();
    res.status(200).send(allDesserts);
  } catch (error) {
    res.status(500).send('Error getting desserts', error);
  }
};

dessertsController.getDessertById = async (req, res) => {
  const { id } = req.params;
  try {
    const dessertFound = await DessertModel.findById(id);
    res.status(200).send(dessertFound);
    if (!dessertFound) {
      return res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user' + error });
  }
};

dessertsController.createDessert = async (req, res) => {
  const newDessert = new DessertModel({ ...req.body });
  //de ese modelo de datos, haces un user nuevo con el body de la peticion

  try {
    await newDessert.save(); //inserto el cambio en la base de datos
    const allDesserts = await DessertModel.find(); //cuando se ha actualizado, dame lo que haya en la base de dtaos.
    res.status(200).send(allDesserts);
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user' + error });
  }
};

dessertsController.updateDessert = async (req, res) => {
  const { id } = req.params;
  // const newData = req.body;

  try {
    const counter = req.body.stock;
    await DessertModel.updateOne({ _id: id }, { $inc: { stock: -counter } });
    // Tienes 2 parametors: objeto id, busca el ususario cuyo _id sea igual al id, y haz un set (actualizasr) de todo lo que te envie en el req.boy
    const allDesserts = await DessertModel.find(); //leo la lista de usuarios actualizados
    res.status(200).send(allDesserts);
  } catch (error) {
    return res.status(500).send({ message: 'Error updating user' + error });
  }
};

// usersController.deleteDessert = async (req, res) => {
//   const { id } = req.params;

//   try {
//     await DessertModel.deleteOne({ _id: id });
//     // Localizo el _id igual al id
//     const allUsers = await DessertModel.find(); //leo la lista de usuarios actualizados
//     res.status(200).send(allUsers);
//   } catch (error) {
//     return res.status(500).send({ message: 'Error creating user' + error });
//   }
// };

module.exports = dessertsController;
