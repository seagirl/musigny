import { calledTimes, mockReturnValues } from '../../../core/test/mock'
import { mockMusignyEntityNameBasicRepository } from '../../../domain/repository/basic.repository'
import { MusignyClassNameBasicInteractor } from './basic.usecase'

const dependency = {
  MusignyEntityNameBasicLowerRepository: mockMusignyEntityNameBasicRepository
}

const interactor = new MusignyClassNameBasicInteractor(dependency)

interface Scenario {
  MusignyEntityNameBasicLowerRepositorySearchSpy: jest.SpyInstance;
}

let scenario: Scenario

describe('MusignyClassNameBasicInteractor', () => {
  beforeEach(() => {
    scenario = {
      MusignyEntityNameBasicLowerRepositorySearchSpy: jest.spyOn(mockMusignyEntityNameBasicRepository, 'search')
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('execute', async () => {
    mockReturnValues(scenario, {
      MusignyEntityNameBasicLowerRepositorySearchSpy: Promise.resolve([])
    })

    const result = await interactor.execute({})
    expect(result).toEqual({
    })

    expect(calledTimes(scenario))
      .toEqual({
        MusignyEntityNameBasicLowerRepositorySearchSpy: 1,
      })
  })
})