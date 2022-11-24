import { IsEmail, MinLength } from "class-validator";
import { CreateProfile } from "../interfaces/profile.interface";

// Creating a DTO (CreateProfilesDTO), that implements a child interface (CreateProfile)
export class CreateProfilesDTO implements CreateProfile {
    @IsEmail()
    readonly email: string;
    
    @MinLength(2)
    readonly password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}