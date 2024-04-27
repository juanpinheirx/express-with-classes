import express = require('express');
import router from './routes/index';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();

    this.app.get('/', (_req, res) => {
      res.status(200).send('Hello World');
    });
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(port: string | number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

export default App;
