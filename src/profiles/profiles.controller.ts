import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProfilesDTO } from './dtos/create-profile.dto';
import { UpdatePasswordProfilesDTO } from './dtos/update-password-profile.dto';
import { UpdateProfilesDTO } from './dtos/update-profile.dto';
import { Profile } from './interfaces/profile.interface';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    // Dependency injection = imports data for use
    // Dependency injection - profiles service
    constructor(private readonly profilesService: ProfilesService) {}

    // URL = /profiles
    @Get()
    findAll(): Promise<Profile[]> {
        return this.profilesService.findAll().then((result) => {
            if(!(result.length === 0)) {
                return result;
            } else {
                throw new HttpException('Profiles not found', HttpStatus.NOT_FOUND);
            }
        });
    }

    @Post()
    create(@Body() createProfile: CreateProfilesDTO): Promise<Profile> {
        return this.profilesService.create(createProfile);
    }

    // URL = /profiles/:id
    @Get(':id')
    findSpecific(@Param('id') id): Promise<Profile> {
        return this.profilesService.findSpecific(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
        });
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateProfile: UpdateProfilesDTO): Promise<Profile> {
        return this.profilesService.update(id, updateProfile).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
        });
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Profile> {
        return this.profilesService.delete(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
        });
    }

    // URL = /profiles/password/:id
    @Put('/password/:id')
    updatePassword(@Param('id') id, @Body() updatePasswordProfile: UpdatePasswordProfilesDTO): Promise<Profile> {
        return this.profilesService.updatePassword(id, updatePasswordProfile).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
        });
    }
}
