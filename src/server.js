import { renderPage } from 'cmmn';
import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.static('tmp/public'));

routes.forEach(route => {
  app.get(route, (req, res) => {
    const parts = req.url.split('/').filter(item => item.trim() !== '');
    renderPage({ route: parts }, res);
  });
});

app.listen(8080, function (err) {
  if (err) console.error(err);
  else console.log('Server is listening on port 8080.');
});
