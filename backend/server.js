import jsonServer from 'json-server';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); 
console.log('Database path:', path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
server.db = router.db;
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
