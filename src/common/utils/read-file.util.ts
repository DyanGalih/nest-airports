import { readFileSync } from 'fs';
import { join } from 'path';

export class ReadFileUtil {
  static read(filePath: string) {
    return readFileSync(
      join(process.cwd(), filePath.replaceAll('../', '/')),
      'utf-8'
    ).toString();
  }
}
