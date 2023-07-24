import mongoose, { Schema, Types } from 'mongoose';

const SessionSchema = new Schema({
    sessionToken: {
        type: String,
        unique: true,
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
    },
    expires: Date,
});

let Session: mongoose.Model<any>;
try {
    mongoose.model('Session');
} catch (err) {
    mongoose.model('Session', SessionSchema);
}

export { Session };
