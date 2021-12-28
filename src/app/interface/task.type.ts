import {Exclude, Expose, plainToClass } from 'class-transformer';
import {
  IsNotEmpty,
  IsBoolean,
} from 'class-validator';

export interface ITask {
  id?: string,
  title?: string,
  description?: string,
  status?: 'TODO' | 'DONE'
  important?: boolean,
  created?: Date
}

export interface ICreateTaskInput {
  title: string,
  description?: string,
}

export interface ISort {
  name: string,
  title: string,
  icon?: string
}

export interface ISortBy {
  name?: string,
  az?: 'asc' | 'desc'
}

@Exclude()
export class TaskEntity {
  @Expose()
  @IsNotEmpty()
  title: string;

  @Expose()
  description: string;

  @Expose()
  status: string;

  @Expose()
  @IsBoolean()
  important: boolean

  constructor(task: Partial<TaskEntity>) {
    if (task) {
      Object.assign(
        this,
        plainToClass(TaskEntity, task, {
          excludeExtraneousValues: true,
        }),
      );
    }
  }
}
