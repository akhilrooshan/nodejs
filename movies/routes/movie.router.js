const movieController=require('../controllers/movieController')
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
const router = require('express').Router()
const express = require('express')
const app = express()
router.get(`/hello`, async function (req, res) {
    const url = "https://dummyapi.io/data/v1/user"
    const options = {
        method: 'GET',
        headers: {
            'app-id': '63a53af2c874b7fdfa631484',
        }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: `Internal Server Error.` });
    }
});
router.post("/movies/hollywood/create" ,movieController.createHollywood);
router.get("/movies/hollywood",movieController.getAllHollywood);
router.get("/movies/hollywood:id",movieController.findOneHollywood);
router.put("/movies/hollywood:id",movieController.updateHollywood);
router.delete("/movies/hollywood:id",movieController.deleteHollywood);
router.delete("/movies/hollywood/deleteAll",movieController.deleteAllHollywood);



router.post("/movies/desi/create" ,movieController.createDesi);
router.get("/movies/desi",movieController.getAllDesi);
router.get("/movies/desi:id",movieController.findOneDesi);
router.put("/movies/desi:id",movieController.updateDesi);
router.delete("/movies/desi:id",movieController.deleteDesi);
router.delete("/movies/desi/deleteAll",movieController.deleteAllDesi);
// router.post("/user/login" ,movieController.createUser);
// router.put("/user/logout:id",movieController.logout);
// router.get("/user/logs",movieController.getLogs);
module.exports=router
