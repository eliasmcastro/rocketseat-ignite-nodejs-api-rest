import fastify from 'fastify'

const app = fastify()

app.get('/', async () => {
  return { message: 'Hello, Rocketseat Ignite Node.js API!' }
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3333')
})
