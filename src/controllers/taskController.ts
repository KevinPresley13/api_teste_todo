import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Tasks } from '../models/Todo';
import { sequelize } from '../instances/mysql';
 
export const all =async (req: Request, res: Response) => {
    let taskList = await Tasks.findAll();
    res.json({taskList})
};

export const add =async (req: Request, res: Response) => {
    if (req.body.task) {
        let newTask = await Tasks.create({
            task: req.body.task
        });
        res.status(201).json({item: newTask});
    }else{
        res.json({ error: 'erro ao criar tarefa.' })
    };
};
    
export const update =async (req: Request, res: Response) => {
    
};

export const remove =async (req: Request, res: Response) => {
    
};