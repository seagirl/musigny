import pluralize from 'pluralize'
import { generate } from './generate'

interface Options {
  output: string;
  verbose: boolean;
  force: boolean;
  test: boolean;
  apiName?: string;
  className?: string;
  entityName?: string;
  dbEntityName?: string;
  templatesDir?: string;
}

export const generateAPI = (apiName: string, entityName: string, options: Options): void => {
  const dbEntityName = options.dbEntityName ?? pluralize(entityName)
  console.log(`generateAPI ${apiName} ${entityName} ${dbEntityName}`)

  options.apiName = apiName
  options.entityName = entityName
  options.dbEntityName = dbEntityName

  generate(`domain/entity/${entityName}.entity`, options)
  generate(`domain/factory/${entityName}.factory`, options)
  generate(`domain/repository/${entityName}.repository`, options)
  generate(`app/usecase/${entityName}/${apiName}.usecase`, options)
  generate(`db/repository/${entityName}.repository`, options)
  generate(`db/entity/${dbEntityName}`, options)
  generate(`web/adapter/${entityName}.translator`, options)
  generate(`web/adapter/${entityName}/${apiName}.adapter`, options)
  generate(`web/builder/${entityName}/${apiName}.builder`, options)
  generate(`web/express/api/${entityName}.api`, options)
  generate(`web/view-model/${entityName}.view-model`, options)
}