import { Ability, AbilityClass } from '@casl/ability';

type Actions = 'manager' | 'create' | 'read' | 'update' | 'delete';
type Subjects = 'Todo' | 'User' | 'all';

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;
