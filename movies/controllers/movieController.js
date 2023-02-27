const db = require('../models/hollywoodmodel')
const db1 = require('../models/indianmodel')

// const user=require('../models/usermodels')
//Create and Save a new campaign
exports.createHollywood = async (req, res) => {
    try {
        const { id, campaignName, status, Ctr, startDate, applicationCategory, applicationCategoryValues } = req.body
        const data = await db.create(req.body)
        return await res.status(200).send(data)
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//get all campaigns which existing
exports.getAllHollywood = async (req, res) => {
    try {
        const data = await db.findAll()
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//find the specific campaign by id
exports.findOneHollywood = async (req, res) => {
    try {
        const val = req.params.id;
        const data = await db.findAll({ where: { id:val} })
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//update the specific campaign by id
exports.updateHollywood = async (req, res) => {
    try {
        const val =req.params.id;
        const data= await db.update(req.body,{where:{id:val}})
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//delete the specific campaign by id
exports.deleteHollywood = async (req, res) => {
    const varId = req.params.id;
    try {
        const data = await db.destroy({ where: { id: varId } });
        res.status(200).json(data);
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//delete all campaign stored
exports.deleteAllHollywood = async (req, res) => {
    try {
        const data = await db.destroy({ where: {} });
        res.status(200).json(data);
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};



exports.createDesi = async (req, res) => {
    try {
        const { id, campaignName, status, Ctr, startDate, applicationCategory, applicationCategoryValues } = req.body
        const data = await db1.create(req.body)
        return await res.status(200).send(data)
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//get all campaigns which existing
exports.getAllDesi = async (req, res) => {
    try {
        const data = await db1.findAll()
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//find the specific campaign by id
exports.findOneDesi = async (req, res) => {
    try {
        const val = req.params.id;
        const data = await db1.findAll({ where: { id:val} })
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//update the specific campaign by id
exports.updateDesi = async (req, res) => {
    try {
        const val =req.params.id;
        const data= await db1.update(req.body,{where:{id:val}})
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//delete the specific campaign by id
exports.deleteDesi = async (req, res) => {
    const varId = req.params.id;
    try {
        const data = await db1.destroy({ where: { id: varId } });
        res.status(200).json(data);
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//delete all campaign stored
exports.deleteAllDesi = async (req, res) => {
    try {
        const data = await db1.destroy({ where: {} });
        res.status(200).json(data);
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
