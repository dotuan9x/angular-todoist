export interface ITask {
  title: string,
  status: 'TODO' | 'DONE'
  important?: boolean,
  created?: Date
}
