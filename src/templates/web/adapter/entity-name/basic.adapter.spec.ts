import { MusignyClassNameBasicController, MusignyClassNameBasicPresenter } from './basic.adapter'
import { MusignyClassNameBasicInteractor, MusignyClassNameBasicUseCaseInput, MusignyClassNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { MockMusignyEntityNameBasicRepository } from '../../../app/repository/basic.repository'

const repository = new MockMusignyEntityNameBasicRepository()

const interactor = new MusignyClassNameBasicInteractor({
  repository: repository,
})

const controller = new MusignyClassNameBasicController(interactor)
const presenter = new MusignyClassNameBasicPresenter()

let interactorSpy: jest.SpyInstance

describe('MusignyClassNameBasicAdapter', () => {
  beforeEach(() => {
    interactorSpy = jest.spyOn(interactor, 'execute')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('handle and present', async () => {
    interactorSpy.mockImplementation((input: MusignyClassNameBasicUseCaseInput): Promise<MusignyClassNameBasicUseCaseOutput> => {
      expect(input).toEqual({
      })

      return Promise.resolve({
      })
    })

    const result = await controller.handle({
      query: {},
      body: undefined,
      params: {},
    })

    expect(interactorSpy).toHaveBeenCalledTimes(1)

    expect(result).toEqual(
      expect.objectContaining({
      })
    )

    const response = presenter.present(result)

    expect(response).toEqual(
      expect.objectContaining({
      })
    )
  })
})