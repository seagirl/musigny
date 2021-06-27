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
musigny generate domain/repository/user.repository
musigny generate app/usecase/user/get-users.usecase
musigny generate app/usecase/user/translator
musigny generate db/repository/user.repository
musigny generate web/express/api/user.api
```
