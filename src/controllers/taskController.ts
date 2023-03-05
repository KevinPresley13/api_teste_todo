import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Tasks } from '../models/Mysql';
import { sequelize } from '../instances/mysql';
 
export const test =async (req: Request, res: Response) => {
    try{
        await sequelize.authenticate()
        console.log('conexão bem sucedida')
    }catch{
        console.log('erro de conexão')
    }
}
    


