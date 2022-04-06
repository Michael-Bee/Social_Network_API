const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: String,
    email: String,
    thought: [//Array of _id values referencing the Thought model
    ],
    friends: [//Array of _id values referencing the User model (self-reference)
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//Make a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
