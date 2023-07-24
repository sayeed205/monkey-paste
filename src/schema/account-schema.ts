import mongoose, { Schema, Types } from 'mongoose';

const AccountSchema = new Schema(
    {
        userId: {
            type: Types.ObjectId,
            ref: 'User',
        },
        type: {
            type: String,
        },
        provider: {
            type: String,
        },
        providerAccountId: {
            type: String,
        },
        refresh_token: {
            type: String,
        },
        access_token: {
            type: String,
        },
        expires_at: {
            type: Number,
        },
        token_type: {
            type: String,
        },
        scope: {
            type: String,
        },
        id_token: {
            type: String,
        },
        session_state: {
            type: String,
        },
    },
    { timestamps: true }
);

let Account: mongoose.Model<any>;
try {
    mongoose.model('Account');
} catch (err) {
    mongoose.model('Account', AccountSchema);
}

export { Account };
