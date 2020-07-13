import { MusignyClassNameBasicInteractor } from './basic.usecase'
import { MockMusignyEntityNameBasicRepository } from '../../../domain/repository/basic.repository'

const MusignyEntityNameBasicLowerRepository = new MockMusignyEntityNameBasicRepository()

const interactor = new MusignyClassNameBasicInteractor({
  MusignyEntityNameBasicLowerRepository: MusignyEntityNameBasicLowerRepository
})

let MusignyEntityNameBasicLowerRepositorySearchSpy: jest.SpyInstance

describe('MusignyClassNameBasicInteractor', () => {
  beforeEach(() => {
    //MusignyEntityNameBasicLowerRepositorySearchSpy = jest.spyOn(repository, 'search')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('execute', async () => {
    //MusignyEntityNameBasicLowerRepositorySearchSpy.mockReturnValue(Promise.resolve({ entities: [], hasNext: false }))

    const result = await interactor.execute({})
    expect(result).toEqual({
      hasNext: false,
      entities: []
    })

    //expect(MusignyEntityNameBasicLowerRepositorySearchSpy).toHaveBeenCalledTimes(1)
  })
})