import fs from 'fs/promises';
import path from 'path';
import { initialCmsSnapshot } from '@/data/defaultCmsConfig';

const CMS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'cmsState.json');

export async function getServerCmsSnapshot(): Promise<typeof initialCmsSnapshot> {
  try {
    const raw = await fs.readFile(CMS_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    return { ...initialCmsSnapshot, ...parsed };
  } catch {
    return initialCmsSnapshot;
  }
}

