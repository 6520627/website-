import { promises as fs } from 'fs';
import path from 'path';

async function main() {
  const packageJsonPath = './FastRoute/package.json';
  const testFilePath = './FastRoute/src/__tests__/App.test.tsx';

  try {
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);