import mongoose, { Document, Schema } from 'mongoose';

export interface IUserModel extends Document {
    name: string;
    phone: string;
    password: string;
    securityQuestion: string;
    securityAnswer: string;
    accounts: Array<IAccountModel>;
}

export interface IAccountModel extends Document {
    name: string;
    email: string;
    image?: Buffer;
}

const UserSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 300
    },
    securityQuestion: {
        type: String,
        required: false,
        trim: true,
        maxlength: 200
    },
    securityAnswer: {
        type: String,
        required: false,
        trim: true,
        maxlength: 100
    },
    accounts: [{
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100
        },
        email: {
            type: String,
            required: false,
            trim: true,
            maxlength: 100
        },
        image: {
            type: Buffer,
            required: false,
            trim: true
        }
    }]
});

export default mongoose.model<IUserModel>('User', UserSchema);