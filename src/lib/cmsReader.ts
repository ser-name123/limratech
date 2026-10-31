import fs from 'fs/promises';
import path from 'path';
import { initialCmsSnapshot } from '@/data/defaultCmsConfig';
import { dbReadCms } from '@/lib/supabase';

const CMS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'cmsState.json');

export async function getServerCmsSnapshot(): Promise<typeof initialCmsSnapshot> {
  // 1) Primary source: the cms_state row in Supabase.
  try {
    const fromDb = await dbReadCms();
    if (fromDb) {
      return { ...initialCmsSnapshot, ...fromDb };
    }
  } catch {
    // ignore and fall back
  }
  // 2) Fallback: local file. 3) Last resort: committed defaults.
  try {
    const raw = await fs.readFile(CMS_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    return { ...initialCmsSnapshot, ...parsed };
  } catch {
    return initialCmsSnapshot;
  }
}

