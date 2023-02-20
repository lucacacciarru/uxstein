import { exec } from 'child_process';
import dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(process.cwd(), '.env.local'),
});

exec(
  `npx json-server ${
    process.env.NODE_ENV === 'development' ? '--watch' : ''
  } .mockend.json --port ${process.env.JSON_SERVER_PORT} --host ${
    process.env.JSON_SERVER_HOST
  }`,
  {
    cwd: process.cwd(),
  },
).stdout?.on('data', console.log);
