const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            lowercase: true
        },
        seq: {
            type: Number,
            unique: true,
        },
        userID: {
            type: String,
            required: true,
            unique: true,
            sparse:true
        },
        status: {
            type: String,
            default: 'active',
        },
         picture: {
                type: String
            },
        emailGoogle: {
            type: String,
        },
    emailVerified: {
        type: Boolean
    },
        role: {
            type: String,
            lowercase: true,
            default: 'user'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true
        },
    },
    {
        collection: 'users'
    }
)
module.exports=mongoose.model( 'UserGoogle', userSchema )
