const {Schema, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(

  {
    // set custom id to avoid confusion with parent thought _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },

    reactionBody: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280
    },

    username: {
      type: String,
      required: true
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (currentDate) => dateFormat(currentDate)
    }
  },

  {
    toJSON: {
      getters: true
    },
    id: false
  },
);

module.exports = reactionSchema; 