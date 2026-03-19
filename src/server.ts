import { app } from './app'
import { env } from './env'

app
  .listen({
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running`)

    if (env.NODE_ENV === 'development') {
      console.log(`http://localhost:${env.PORT}`)
    }
  })
