import { MusignyClassNameBasicInteractor } from './basic.usecase'
import { MockMusignyEntityNameBasicRepository } from '../../repository/basic.repository'

const repository = new MockMusignyEntityNameBasicRepository()
const interactor = new MusignyClassNameBasicInteractor({
  repository: repository
})

let repositorySearchSpy: jest.SpyInstance

describe('MusignyClassNameBasicInteractor', () => {
  beforeEach(() => {
    //repositorySearchSpy = jest.spyOn(repository, 'search')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('execute', async () => {
    //repositorySearchSpy.mockReturnValue(Promise.resolve([]))

    const result = await interactor.execute({})
    expect(result).toEqual({ data: [] })

    //expect(repositorySearchSpy).toHaveBeenCalledTimes(1)
  })
})