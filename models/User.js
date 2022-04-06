import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    urlName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'register',
    },
    date: {
      type: Date,
      default: Date.now,
    },
    userImage: {
      type: String,
      default: '/img/avatars/blue.png',
    },
    realName: {
      type: String,
    },
    birthdate: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    statistics: {
      type: [String],
    },
    reading: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book',
      },
    ],
    goingToRead: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book',
      },
    ],
    read: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book',
      },
    ],
    favouriteBooks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book',
      },
    ],
    bookshelf: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book',
      },
    ],
    wantToBorrow: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book',
      },
    ],
    favouriteAuthors: [
      {
        type: Schema.Types.ObjectId,
        ref: 'author',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('user', UserSchema);
