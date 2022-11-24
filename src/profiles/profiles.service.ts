import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './interfaces/profile.interface';

@Injectable()
export class ProfilesService {
    // Dependency injection = imports data for use
    // Dependency injection - profile interface
    constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}

    async findAll(): Promise<Profile[]> {
        return await this.profileModel.find({});
    }
    
    async findSpecific(id: string): Promise<Profile> {
        return await this.profileModel.findOne({ _id: id });
    }

    async create(profile: Profile): Promise<Profile> {
        const newProfile = new this.profileModel(profile);
        return await newProfile.save();
    }

    async update(id: string, profile: Profile): Promise<Profile> {
        // { new : true} = creates a new document if it doesn´t already exist
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }

    async updatePassword(id: string, profile: Profile): Promise<Profile> {
        // { new : true} = creates a new document if it doesn´t already exist
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }

    async delete(id: string): Promise<Profile> {
        return await this.profileModel.findByIdAndDelete(id);
    }
}
