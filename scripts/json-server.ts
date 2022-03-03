import { exec } from 'child_process';
import dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(process.cwd(), '.env.local'),
});

exec(
  `npx json-server --watch --watch data/db.json --port ${process.env.JSON_SERVER_PORT}`,
  {
    cwd: process.cwd(),
  },
).stdout?.on('data', console.log);
