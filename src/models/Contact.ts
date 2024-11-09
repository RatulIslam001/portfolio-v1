import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    },
    email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: {
        validator: function(v: string) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: 'Please enter a valid email'
    }
    },
    subject: {
    type: String,
    required: false,
    trim: true,
    },
    message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    },
}, {
    timestamps: true,
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)
