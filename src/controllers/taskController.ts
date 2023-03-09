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
    const id: string = req.params.id;
    let todo = await Tasks.findByPk(id);
    if(todo){
        if(req.body.task){
            todo.task = req.body.task;
        };

        if(req.body.verify){
            let task: number = parseInt(req.body.verify);
            switch(task){
                case 1:
                    todo.verify = 1
                    break;
                case 2:
                    todo.verify = 2
                    break;
            }
        }
        await todo.save();
        res.status(201).json({ item: todo })
    }else{
        res.json({ error: 'item nao encontrado.' });
    }
};

export const remove =async (req: Request, res: Response) => {
    
};