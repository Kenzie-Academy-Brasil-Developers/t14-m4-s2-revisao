import { Client } from 'pg'

const client: Client = new Client({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    database: 'revisao',
    port: 5432
})


const startDatabase = async (): Promise<void> => {
    await client.connect();
    console.log('Database conectado!')
}


export { client, startDatabase }