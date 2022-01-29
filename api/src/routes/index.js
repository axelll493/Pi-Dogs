const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const {Dog, Temperaments} = require("../db");
const e = require('express');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const GetApiInfo = async () => {
    const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds")
    const apiInfo = await apiUrl.data.map(el => {
        return{
            id: el.id,
                name: el.name,
                heightMin: el.height.metric.split(' - ')[0],
                heightMax: el.height.metric.split(' - ')[1],
                weightMin: el.weight.metric.split(' - ')[0],
                weightMax: el.weight.metric.split(' - ')[1],
                life_span: el.life_span,
                temperament: el.temperament,
                image: el.image.url,
        }
    })
    return apiInfo
}

const GetDbInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ['name'],
            through:{
                attributes: [],
            },
        }
    })
}

const getAllDogs = async () => {
    let apiInfo = await GetApiInfo();
    const dbInfo = await GetDbInfo();
    const infoTotal =apiInfo.concat(dbInfo);
    return infoTotal
}

router.get('/dogs', async (req, res)=> {
    const name = req.query.name
    let dogsTotal = await getAllDogs();
    if(name){
        let nameDogs = await dogsTotal.filter(e=> e.name.toLowerCase().includes(name.toLowerCase()))
        nameDogs.length ?
        res.status(200).send(nameDogs) :
        res.status(404).send("No esta ese perro")
    }else {
        res.status(200).send(dogsTotal)
    }
})

router.get('/temperament', async(req, res) =>{
    const temperamentsApi = await axios.get('https://api.thedogapi.com/v1/breeds')
    let tempsRepeated = temperamentsApi.data.map(el => el.temperament).toString();
    tempsRepeated = await tempsRepeated.split(',');
    const tempsConEspacio = await tempsRepeated.map(el => {
        if (el[0] == ' ') {
            return el.split('');
        }
        return el;
    });
    const tempsSinEspacio = await tempsConEspacio.map(el => {
        if (Array.isArray(el)) {
            el.shift();
            return el.join('');
        }
        return el;
    })

    await tempsSinEspacio.forEach(el => {
        if (el != '') {
            Temperaments.findOrCreate({
                where: {
                    name: el
                },
            });
        }
    });
    const allTemps = await Temperaments.findAll();
    res.status(200).send(allTemps);
})

router.post("/dog", async (req, res) => {
    let {
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        temperament,
        image,
        createdInDb,
    } = req.body
    let DogsCreate = await Dog.create({
        name,
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        image,
        createdInDb,
    })
    let temperamentsDB = await Temperaments.findAll({
        where: {
            name: temperament
        }
    })
    DogsCreate.addTemperaments(temperamentsDB)
    res.send("Perros Creados Con Exito")
})

router.get('/dogs/:id', async (req,res)=> {
    const id = req.params.id
    const dogsTotals = await getAllDogs()
    if(id){
        let RaceId = await dogsTotals.filter(e=> e.id == id)
        RaceId.length?
        res.status(200).json(RaceId) :
        res.status(404).send("No se encontro razas")
    }
})
module.exports = router;
