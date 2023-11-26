const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
          type: String,
          required: "Thought is Required",
          minlength: 1,
          maxlength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (currentDate) => dateFormat(currentDate)
        },

        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema]
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;