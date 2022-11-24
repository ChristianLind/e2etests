import * as mongoose from 'mongoose';

// Creating a mongoose schema (profileSchema)
export const profileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});