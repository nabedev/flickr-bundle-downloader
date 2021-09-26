import { LitElement } from 'lit'

export const ErrorCallbackMixin = superClass => {
  class MyMixin extends superClass {
    errorCallback(error) {
      console.log(error)
    }

    performUpdate() {
      try {
        super.performUpdate()
      } catch (err) {
        console.log(err)
        this.errorCallback(errr)
      }
    }
  }
  return MyMixin
}
