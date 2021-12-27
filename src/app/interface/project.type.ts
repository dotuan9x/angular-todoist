export interface IProject {
  id?: string,
  name?: string,
  title: string,
  description?: string,
  icon?: string,
}

export interface ProjectGraphQLResult {
  id?: string,
  attributes: IProject
}
