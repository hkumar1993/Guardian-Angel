import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import constants from '../config/constants';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      validate: {
        validator(username) {
          return username.length >= 4 && username.length <= 12;
        },
        message: "username's length must be between 4 to 12 characters"
      }
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      validate: {
        validator(email) {
          const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
          return emailRegex.test(email);
        },
        message: '{VALUE} is not a valid email!'
      }
    },
    password: {
      type: String,
      min: [4, 'password must be at least 4 characters'],
      validate: {
        validator(password) {
          return password.length >= 6 && password.match(/\d+/g);
        },
        message: 'Not a valid password!'
      }
    },

    firstName: String,
    lastName: String,
    avatar: String,
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }]
  },
  { timestamps: true }
);

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id
      },
      constants.JWT_SECRET
    );
  }
};

export default mongoose.model('User', UserSchema);
