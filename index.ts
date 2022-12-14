import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  await prisma.user.create({

    data: {

      name: 'bruno',

      email: 'bruno.goulart1414@gmail.com',

      posts: {

        create: { title: 'criadoo' },

      },

      profile: {

        create: { bio: 'bio criado' },

      },

    },

  })


  const allUsers = await prisma.user.findMany({

    include: {

      posts: true,

      profile: true,

    },

  })

  console.dir(allUsers, { depth: null })
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
