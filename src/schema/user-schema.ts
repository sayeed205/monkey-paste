import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
            required: true,
        },
        emailVerified: {
            type: Boolean,
            default: false,
        },
        image: String,
        accounts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Account',
            },
        ],
        sessions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Session',
            },
        ],
    },
    { timestamps: true }
);

let User: mongoose.Model<any>;
try {
    User = mongoose.model('User');
} catch (err) {
    User = mongoose.model('User', UserSchema);
}

interface UserDocument extends mongoose.Document {
    name: string | null;
    email: string;
    emailVerified: boolean;
    image: string | null;
    accounts: mongoose.Types.ObjectId[];
    sessions: mongoose.Types.ObjectId[];
}

export { User, type UserDocument };
