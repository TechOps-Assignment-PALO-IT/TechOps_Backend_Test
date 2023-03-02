const controller = new class Controller {
  async getHello(): Promise<string> {
    return Promise.resolve('hello')
  }
}

export default controller