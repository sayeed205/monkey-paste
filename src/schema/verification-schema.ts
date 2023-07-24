import mongoose, { Schema } from 'mongoose';

const VerificationSchema = new Schema({
    identifier: String,
    token: {
        type: String,
        unique: true,
    },
    expiresAt: Date,
});

let Verification: mongoose.Model<any>;
try {
    Verification = mongoose.model('Verification');
} catch (err) {
    Verification = mongoose.model('Verification', VerificationSchema);
}

export { Verification };
