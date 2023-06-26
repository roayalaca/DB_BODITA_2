const Confirmation = require("../models/confirmation.models");

const createConfirmation = async (req, res) => {
    try {
        const {completename, attendance, phone} = req.body;

        await Confirmation.create({ completename, attendance, phone });
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createConfirmation
}