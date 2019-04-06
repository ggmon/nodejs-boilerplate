class Application {
  constructor({ server, logger, constVal }) {
    this.server = server;
    this.logger = logger;
  }

  async start() {
    await this.server.start();
  }
}

module.exports = Application;
