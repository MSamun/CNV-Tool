const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) =>
{
    User.find().then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => 
{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const beltLevel = req.body.beltLevel;
    const points = req.body.points;
    const dropInType = req.body.dropInType;
    const isActive = req.body.isActive;
    const profilePictureID = req.body.profilePictureID;
    
    const newNinja = new User(
        {
            firstName,
            lastName,
            beltLevel,
            points,
            dropInType,
            isActive,
            profilePictureID
        }
    );

    newNinja.save().then(() => 
    {
        res.json('User added!')
    }).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>
{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>
{
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>
{
    User.findById(req.params.id).then(user => 
            {
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;

                user.save()
                    .then(() => res.json('User updated!'))
                    .catch(() => res.status(400).json('Error: ' + err));
            })
});

module.exports = router;