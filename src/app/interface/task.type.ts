export interface ITask {
  id?: string,
  title?: string,
  status?: 'TODO' | 'DONE'
  important?: boolean,
  created?: Date
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
