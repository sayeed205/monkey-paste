import mongoose, { Schema, Types } from 'mongoose';

const CodeSchema = new Schema(
    {
        content: String,
        language: String,
        user: {
            type: Types.ObjectId,
            ref: 'User',
        },
        expiresAt: Date,
    },
    { timestamps: true }
);

let Code: mongoose.Model<any>;
try {
    Code = mongoose.model('Code');
} catch (err) {
    Code = mongoose.model('Code', CodeSchema);
}

export { Code };
