import { Controller, Presenter } from '.'

export abstract class Builder {
  public controller!: Controller
  public presenter!: Presenter
}
