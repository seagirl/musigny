import { generate } from './generate'

interface Options {
  output: string;
  verbose: boolean;
  force: boolean;
  test: boolean;
  className?: string;
  entityName?: string;
  templatesDir?: string;
}

export const generateAPI = (apiName: string, entityName: string, options: Options): void => {
  console.log(`generateAPI ${apiName} ${entityName}`)

  generate(`domain/entity/${entityName}.entity`, options)
  generate(`domain/factory/${entityName}.factory`, options)
  generate(`app/repository/${entityName}.repository`, options)
  generate(`app/usecase/${entityName}/${apiName}.usecase`, options)
  generate(`db/repository/${entityName}.repository`, options)
  generate(`db/row/${entityName}`, options)
  generate(`web/adapter/${entityName}.translator`, options)
  generate(`web/adapter/${entityName}/${apiName}.adapter`, options)
  generate(`web/builder/${entityName}/${apiName}.builder`, options)
  generate(`web/express/api/${entityName}.api`, options)
  generate(`web/view-model/${entityName}.view-model`, options)
}