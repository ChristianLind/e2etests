// Creating an interface (Profile)
export interface Profile {
    // ? = Optional
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
}

// Creating a child interface of the Profile interface (CreateProfile)
export interface CreateProfile extends Profile {
    email: string;
    password: string;
}

// Creating a child interface of the Profile interface (UpdateProfile)
export interface UpdateProfile extends Profile {
    firstName: string;
    lastName: string;
}

// Creating a child interface of the Profile interface (UpdatePasswordProfile)
export interface UpdatePasswordProfile extends Profile {
    password: string;
}