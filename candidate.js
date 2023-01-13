const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const jobApplicationSchema=require('./jobApplication')

const candidatesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type:password, required: true},
    phone_number: { type: phone_number },
    linkedin_id: { type: String },
    work_experience: { type: Number },
    resume_link: { type: String },
    status: { type: String, enum: ['pending', 'in process', 'hired', 'rejected'], default: 'pending' },
    applied_jobs: [jobApplicationSchema]
    });
  
const Candidates = mongoose.model('Candidates', candidatesSchema);
module.exports=Candidates;