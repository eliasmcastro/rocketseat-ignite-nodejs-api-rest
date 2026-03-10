import { app } from './app'
import { env } from './env'

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server is running`)

  if (env.NODE_ENV === 'development') {
    console.log(`http://localhost:${env.PORT}`)
  }
})
