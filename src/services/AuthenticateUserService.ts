import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { UserRepositories } from "../repositories/UserRepositories"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password} : IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UserRepositories);

        const user =  await usersRepositories.findOne({ 
            email
        });

        if(!user) {
            throw new Error ("Email/Password incorrect")
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath) {
            throw new Error ("Email/Password incorrect")
        }

        const token = sign({
            email: user.email
        }, "4a5df6e4f5aaa6s5c1", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService}