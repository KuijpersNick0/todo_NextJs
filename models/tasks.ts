import {Schema, model, models} from 'mongoose';
import { ITask} from '@/types';

const taskSchema = new Schema<ITask>({
    task: {
        type: String,
        required: [true, 'Task is required'],
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = models.Task || model<ITask>('Task', taskSchema); // Crée le model mongoose basé sur taskschema

export default Task;