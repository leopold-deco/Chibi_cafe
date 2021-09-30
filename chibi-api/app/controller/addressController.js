const { response } = require('express');
const Address = require('../models/Address');

const addressController = {
    
    findAdressByUser: async (request, response) => {
        try {
            const {id} = request.params;
            const userOrder = await Address.findByUser(id);
            response.status(200).json(userOrder);
        } catch (error) {
            response.status(500).send(error.message);
        }
    },

    deleteAddress: async (request, response) => {
        try {
            const {id} = request.params
            await Address.delete(id);
        } catch (error) {
            response.status(500).send(error.message);
        }
    },

    updateAddress: async (request, response) => {
        try {
            const {id} = request.params.id;
            const updatedAddress = new Address(request.body);
            await updatedAddress.update(id);
            response.status(200).json("Changement effectué")
        } catch(error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = addressController;