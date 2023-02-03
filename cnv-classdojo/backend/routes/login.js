const router = require('express').Router();
const jwt = require('jsonwebtoken');

let User = require('../models/user.model');

router.route('/').post(async (req, res) => 
{
    const fullName = req.body.fullName;
    const nameSplit = fullName.split(".");
    const user = await User.findOne({firstName: nameSplit[0], lastName: nameSplit[1]});

    if (user) 
    {
        const token = jwt.sign(
            {
                firstName: user.firstName,
                lastName: user.lastName,
                beltLevel: user.beltLevel,
                points: user.points,
                dropInType: user.dropInType,
                isActive: user.isActive,
                profilePictureID: user.profilePictureID
            }, 'v6jmSuatYPw5Njr6r4ANWWQq')

        return res.json({success: true, user: token})
    }
    else 
    {
        return res.json({sucess: false, user: false});
    }
});

module.exports = router;