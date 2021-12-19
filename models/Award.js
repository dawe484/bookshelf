import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AwardSchema = new Schema(
  {
    urlAwardTitle: {
      type: String,
    },
    awardTitle: {
      type: String,
      required: true,
    },
    awardCategory: {
      type: String,
      required: true,
    },
    awardType: {
      type: String,
    },
    awardAnnotation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('award', AwardSchema);
