import fs from 'fs';
import { Messages } from '../messages';

import { size } from './size.rule';

const filePath = './stubs/file-small.png';

const file = fs.readFileSync(filePath)

describe('size', () => {
  test('should pass', async () => {
    expect(await size(['4kb'], true).handler({ size: 1024 * 4 })).toBe(true);
    expect(await size(['4kb']).handler(file)).toBe(true);
    expect(await size(['4kb']).handler(filePath)).toBe(true);
    expect(await size(['4kb']).handler({ path: filePath })).toBe(true);
    expect(await size(['4kb', '2kb']).handler(file)).toBe(true);
  });

  test('should fail', async () => {
    expect(await size(['2kb']).handler(file)).toBe(false);
    expect(await size(['4kb', '3kb']).handler(file)).toBe(false);
  });


  test("message should exists", () => {
    expect(Messages.en_US.messages).toHaveProperty('size');
  });
});