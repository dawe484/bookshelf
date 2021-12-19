import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    urlAuthorName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    pseudonym: [
      {
        type: String,
      },
    ],
    birthdate: {
      type: String,
    },
    deathdate: {
      type: String,
    },
    nationality: {
      type: String,
    },
    portraitAuthorName: {
      type: String,
    },
    portraitAuthorLink: {
      type: String,
    },
    portraitAuthorLicense: {
      type: String,
    },
    portraitAuthorLicenseLink: {
      type: String,
    },
    portrait: {
      type: String,
      default: '',
    },
    resumeSource: {
      type: String,
    },
    resume: {
      type: String,
    },
    website: {
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
    wikipedia: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    book: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book',
      },
    ],
    award: {
      type: [
        {
          award: {
            type: Schema.Types.ObjectId,
            ref: 'award',
          },
          yearOfAward: {
            type: Number,
            // required: true
          },
          book: {
            type: String,
            // required: true
          },
        },
      ],
    },
    story: [
      {
        type: Schema.Types.ObjectId,
        ref: 'story',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('author', AuthorSchema);
