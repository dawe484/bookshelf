import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AvatarSchema = new Schema(
  {
    fileTitle: {
      type: String,
      require: true,
    },
    filePath: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    seriesLabel: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('avatar', AvatarSchema);
