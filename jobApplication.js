const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const jobApplicationSchema = new Schema({
    job_id: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, required: true }
  });

const jobApplication=mongoose.model('JobApplication',jobApplicationSchema);
module.exports=jobApplication;