# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Danh sách các chức năng
- [ ] Chức năng thêm task mới
- [x] Storybook cho document
- [x] Tích hợp graphQL
- [ ] Chức năng sắp xếp các task
- [ ] SCAMs (single component Angular modules)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### GraphQL
Sử dụng package [apollo-angular](https://apollo-angular.com/docs/data/queries) để áp dụng graphQL vào project

Để cài đặt ta sử dụng câu lệnh sau, sẽ tự động thêm vào các thư viện cần thiết.
```bash
ng add apollo-angular
```

**Khai báo graphQL schema**
```ts
import {gql} from 'apollo-angular';

export const QUERY_RATES = gql`
  query query {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
```

**Sử dụng graphQL trong component**
```ts
import {Apollo} from 'apollo-angular';
import {QUERY_RATES} from '@app/graphql'

```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
