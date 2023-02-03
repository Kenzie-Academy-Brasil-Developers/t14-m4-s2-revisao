import { QueryResult } from "pg";

interface iTodo {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: boolean; //0-false = não concluido     1-true = concluido
    priority: string;
}


type iTodoResult = QueryResult<iTodo>


export { iTodo, iTodoResult }