import { renderPage } from 'cmmn';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import routes from './routes';

console.log('Writing files...');

routes.forEach(route => {
  const parts = route.split('/').filter(item => item.trim() !== '');
  const filename = path.join('build/public', parts.join('/'), 'index.html');
  console.log('Writing ' + filename + '...');
  mkdirp(path.dirname(filename), function (err) {
    if (err) console.error(err);
    else {
      const ws = fs.createWriteStream(filename);
      renderPage({ route: parts }, ws);
    }
  });
});
