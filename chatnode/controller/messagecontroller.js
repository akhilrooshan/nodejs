var Message=require('../model/model')

exports.Getmessages=async (req, res) => {
    try {
        const data = await Message.find({})
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
