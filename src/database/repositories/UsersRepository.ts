import { prisma } from "../../../prisma/PrismaClient"
import { UserEntity } from "../entities/UserEntity"

type CreateUserDTO ={
    userData: UserEntity
}//Type alias
type FindByEmailDTO ={
    email: string
}//Type alias


class UserRepository{
    async create({userData}: CreateUserDTO){
        const newUser = await prisma.user.create({
            data:{
                ... userData
            }
        })
        return newUser
    }

    async findByEmail({email}: FindByEmailDTO ): Promise<UserEntity>{
        const userFound = await prisma.user.findFirst({

            where:{
                email
            }
        });

        return userFound


    }

}

export {UserRepository}