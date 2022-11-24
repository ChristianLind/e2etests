import { MinLength } from "class-validator";
import { UpdatePasswordProfile } from "../interfaces/profile.interface";

// Creating a DTO (UpdatePasswordProfilesDTO), that implements a child interface (UpdatePasswordProfile)
export class UpdatePasswordProfilesDTO implements UpdatePasswordProfile {
    @MinLength(2)
    readonly password: string;
}