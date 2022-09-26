const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please fill a valid email address',
            ],
        },

        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thoughts',
        }],

        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'friends',
        }]
    },
    {
        toJSON: { virtuals: true },
        id: false
    }
)

schema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', schema);

module.exports = User