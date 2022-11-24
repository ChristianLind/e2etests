import { IsAlpha } from "class-validator";
import { UpdateProfile } from "../interfaces/profile.interface";

// Creating a DTO (UpdateProfilesDTO), that implements a child interface (UpdateProfile)
export class UpdateProfilesDTO implements UpdateProfile {
    @IsAlpha()
    readonly firstName: string;
    
    @IsAlpha()
    readonly lastName: string;
}