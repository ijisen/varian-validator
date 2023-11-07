/**
 * @jest-environment jsdom
 */

const demo = (val: any) => {
  const regFileType = /^(pdf|doc|docx|jpg|jpeg|png)$/i;

  return regFileType.test(val)
}

test('demo validate test', () => {
  expect(demo('pdf')).toBe(true);
  expect(demo('pd f')).toBe(false);
  expect(demo('1pdf')).toBe(false);
  expect(demo('1pdf2')).toBe(false);
  expect(demo('pdf2')).toBe(false);
  expect(demo('  ')).toBe(false);
  expect(demo(undefined)).toBe(false);
  expect(demo('doc')).toBe(true);
  expect(demo('do c')).toBe(false);
  expect(demo('1doc')).toBe(false);
  expect(demo('1doc2')).toBe(false);
  expect(demo('docx')).toBe(true);
  expect(demo('do cx')).toBe(false);
  expect(demo('1docx')).toBe(false);
  expect(demo('1docx2')).toBe(false);
  expect(demo('docx2')).toBe(false);

  expect(demo('jpg')).toBe(true);
  expect(demo('jp g')).toBe(false);
  expect(demo('1jpg')).toBe(false);
  expect(demo('1jpg2')).toBe(false);
  expect(demo('jpg2')).toBe(false);

  expect(demo('jpeg')).toBe(true);
  expect(demo('jp eg')).toBe(false);
  expect(demo('1jpeg')).toBe(false);
  expect(demo('1jpeg2')).toBe(false);
  expect(demo('jpeg2')).toBe(false);

  expect(demo('png')).toBe(true);
  expect(demo('pn g')).toBe(false);
  expect(demo('1png')).toBe(false);
  expect(demo('1png2')).toBe(false);
  expect(demo('png2')).toBe(false);
})
