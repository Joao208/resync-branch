import * as toolKit from 'actions-toolkit'
import '../src/index'

jest.mock('actions-toolkit')

describe('[index] Test case', () => {
  it('Should ', async () => {
    toolKit.Toolkit.log = { info: jest.fn(), success: jest.fn() }
    toolKit.Toolkit.exec = jest.fn()

    // TODO write tests
  })
})
