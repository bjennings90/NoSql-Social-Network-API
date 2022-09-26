const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,

    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },

    username: {
        type: String,
        required: true

    },

    reactions: [reactionSchema]
})

const Thought = model('thoughts', thoughtSchema);


module.exports = Thought;