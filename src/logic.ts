import {Request, Response} from 'express'
import { iTodo, iTodoResult } from './interface'
import { client } from './database'
import { QueryConfig } from 'pg'



const listTodo = async (request:Request, response: Response): Promise<Response> => {
   
   const queryString: string = `
        SELECT 
            *
        FROM
            todos;
   `
    const queryResult: iTodoResult = await client.query(queryString)
   
    return response.status(200).json(queryResult.rows) 
}


const createTodo = async (request:Request, response: Response): Promise<Response> => {
    const newTodo: iTodo = request.body
    
    const queryString: string = `
        INSERT INTO 
            todos(name, description, startDate, endDate, status, priority)
        VALUES 
            ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `
    const queryConfig: QueryConfig = {
        text: queryString,
        values: Object.values(newTodo) // ["Task1", "Description", "2023-03-03", "2023-03-03", false, "0"]
    }
    
    const queryResult: iTodoResult = await client.query(queryConfig)
    return response.status(201).json(queryResult.rows[0])
}


const updateTodo = async (request:Request, response:Response): Promise<Response> => {
    const newTodo: iTodo = request.body;
    const idTodo: string = request.params.id;
    const valuesTodo = Object.values(newTodo)
    
    const queryString: string = `
        UPDATE todos SET
            name = $1,
            description = $2,
            startDate = $3,
            endDate = $4,
            status = $5,
            priority = $6
        WHERE 
            id = $7
        RETURNING *;
        `
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [...valuesTodo, idTodo]
    }
    const queryResult: iTodoResult = await client.query(queryConfig)
    return response.status(200).json(queryResult.rows[0])
}

const deleteTodo = async (request: Request, response: Response): Promise<Response> => {



    const idTodo: string = request.params.id
    const queryString: string = `
        DELETE FROM todos 
        WHERE id = $1`
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [idTodo]
    }
    await client.query(queryConfig);
    return response.status(204).send()
}



export { listTodo, createTodo, updateTodo, deleteTodo }