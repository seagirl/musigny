UNDER DEVELOPMENT

# Musigny :wine_glass:

Generates Boilerplate for TypeScript with Clean Architecture

``` bash
musigny init hello-musigny
cd hello-musigny
yarn install

musigny generate-api get-users user

# or

musigny generate domain/entity/user.entity
musigny generate domain/factory/user.factory
musigny generate app/repository/user.repository
musigny generate app/usecase/user/get-users.usecase
musigny generate db/repository/user.repository
musigny generate web/adapter/user.translator
musigny generate web/adapter/user/get-users.adapter
musigny generate web/builder/user/get-users.builder
musigny generate web/view-model/user.view-model
musigny generate web/api/user.api
```
