const express = require('express');
const router = express.Router();

const Menuitem = require('./../models/Menuitem');

// Post method to post menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body

        const newitem = new Menuitem(data);

        const response = await newitem.save();
        console.log('item saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Get method to get the menu item
router.get('/', async (req, res) => {
    try {
        const data = await Menuitem.find();
        console.log('item fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/:tasty', async (req, res) => {
    try {

        const tasty = req.params.tasty;

        if (tasty === 'spicy' || tasty === 'sour' || tasty === 'sweet') {

            const data = await Menuitem.find({ taste: tasty });
            console.log('Response fetched');
            res.status(200).json(data);

        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.put('/:id', async (req, res) => {
    try {

        const itemId = req.params.id; // Extract the id from the url parameter 
        const updatedItemData = req.body;  // Updated data for the person
        const response = await Menuitem.findByIdAndUpdate(itemId, updatedItemData, {
            new: true, //Return the updated document
            runValidators: true, // Runt Mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'item not found' });
        }

        console.log('item updated');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id; // Extract the id from the url parameter 

        // Assuming you have Person model
        const response = await Menuitem.findByIdAndDelete(itemId);

        if (!response) {
            return res.status(404).json({ error: 'item not found' });
        }
        console.log('data deleted');
        res.status(200).json({ message: 'item deleted successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;