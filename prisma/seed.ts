import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const bruno = await prisma.user.upsert({
        where: { id: 2 },
        update: {name:"Joao"},
        create: {
            email: 'bruno.goulart@viacometa.com',
            name: 'Bruno Goulart'
        },
    });


    console.log({bruno});
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
