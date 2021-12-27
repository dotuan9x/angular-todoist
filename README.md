# Angular

Project được tạo bởi [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Danh sách các chức năng
- [x] [Storybook cho document](https://storybook.js.org/docs/angular/get-started/introduction)
- [x] [Tích hợp graphQL](https://apollo-angular.com/docs/)
- [ ] [SCAMs (single component Angular modules)](https://dev.to/this-is-angular/emulating-tree-shakable-components-using-single-component-angular-modules-13do)
- [ ] [Lazy-loading feature modules](#Lazy-loading feature modules)
- [ ] [Strict mode](https://angular.io/guide/strict-mode)
- [ ] Smart and pure components pattern.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Cài đặt và sử dụng GraphQL
Sử dụng package [apollo-angular](https://apollo-angular.com/docs/data/queries) để áp dụng GraphQL vào project

Để cài đặt ta sử dụng câu lệnh sau, sẽ tự động thêm vào các thư viện cần thiết.
```bash
ng add apollo-angular
```

**Khai báo graphQL schema**
```ts
//src/app/graphql.ts

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

**Sử dụng GraphQL trong component**
```ts
import {Apollo} from 'apollo-angular';
import {QUERY_RATES} from '@app/graphql'

```

### SCAMs (single component Angular modules)
Reference:
- https://dev.to/this-is-angular/emulating-tree-shakable-components-using-single-component-angular-modules-13do
- https://angular-training-guide.rangle.io/modules/module-scam-pattern

### Lazy-loading feature modules
Reference:
- https://angular.io/guide/lazy-loading-ngmodules

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

# Reference
- [Learn RxJS](https://www.learnrxjs.io/learn-rxjs/operators)
