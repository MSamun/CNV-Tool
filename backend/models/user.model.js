/*
* The structure of all the information being stored into the database. When viewing the data in the database, it will take the following format:
*   	{
		"_id": "63d4a8bdb2f1a898cf819089",
		"firstName": "jerry",
		"lastName": "wild",
		"beltLevel": "white",
		"points": 0,
		"dropInType": "in-person",
		"isActive": true,
		"profilePictureID": 0,
		"createdAt": "2023-01-28T04:46:53.279Z",
		"updatedAt": "2023-01-28T04:46:53.279Z",
		"__v": 0
	}
*/

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema
({
    firstName:
    {
        type: String,
        lowercase: true,
        required: true,
        unique: false,
        trim: true,
        minlength: 2
    },
    lastName:
    {
        type: String,
        lowercase: true,
        required: true,
        unique: false,
        trim: true,
        minlength: 2
    },
    beltLevel:
    {
        type: String,
        lowercase: true,
        required: false,
        unique: false,
        trim: true,
        enum: ['white', 'yellow', 'orange', 'green', 'blue', 'purple', 'brown', 'red', 'black'],
        default: 'white'
    },
    points:
    {
        type: Number,
        required: false,
        unique: false,
        min: 0,
        max: 999999,
        default: 0,
        validate: 
        {
            validator: Number.isInteger,
            message: 'Invalid points. {VALUE} is not an integer.'
        }
    },
    dropInType:
    {
        type: String,
        lowercase: true,
        required: true,
        unique: false,
        trim: true,
        enum: ['online', 'junior', 'in-person']
    },
    isActive:
    {
        type: Boolean,
        required: false,
        unique: false,
        default: true
    },
    profilePictureID:
    {
        type: Number,
        required: false,
        unique: false,
        min: 0,
        default: 0,
        validate: 
        {
            validator: Number.isInteger,
            message: 'Invalid Profile Picutre ID. {VALUE} is not an integer.'
        }
    }
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;