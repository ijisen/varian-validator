import { inputTextareaFormat } from "../lib";

test('inputTextareaFormat validate test', () => {
  expect(inputTextareaFormat(null)).toStrictEqual([]);
  expect(inputTextareaFormat('   ')).toStrictEqual([]);
  expect(inputTextareaFormat(' A b  ')).toStrictEqual(['a','b']);
  expect(inputTextareaFormat(' A b  ', false)).toStrictEqual(['A', 'b']);
  expect(inputTextareaFormat(' A b  ', false).toString()).toStrictEqual("A,b");

})
