import {IMenu} from '@app/interface/menu.type'
import {ISort} from '@app/interface/task.type'

export enum TASK_STATUS {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DONE = "DONE",
  REMOVE = "REMOVE"
}

export const DEFAULT_MENU: IMenu[] = [
  {name: 'myday', label: 'My Day', active: true, icon: 'sun', counter: 0},
  {name: 'important', label: 'Important', active: false, icon: 'star', counter: 0},
  {name: 'planned', label: 'Planned', active: false, icon: 'calendar', counter: 0},
  {name: 'task', label: 'Task', active: false, icon: 'home', counter: 0},
]

export const TASK_SORT: ISort[] = [
  {
    name: 'important',
    title: 'Tầm quan trọng',
    icon: 'star'
  },
  {
    name: 'expiredDate',
    title: 'Ngày đến hạn',
    icon: 'calendar'
  },
  {
    name: 'alphabet',
    title: 'Theo thứ tự bảng chữ cái',
    icon: 'switch-vertical'
  },
  {
    name: 'createdDate',
    title: 'Ngày tạo',
    icon: 'calculator'
  }
]
