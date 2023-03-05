import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";


export interface TaskInstance extends Model{
    id: number,
    task: string,
    verify: number
};

export const Tasks = sequelize.define<TaskInstance>('Tasks', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true 
    },
    task: {
        type: DataTypes.STRING
    },
    verify: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
},{
    tableName: 'testeapi',
    timestamps: false
});