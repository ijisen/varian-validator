import { isDomain, } from "../lib";

test('isDomain validate test', () => {
  expect(isDomain({ str: 'aaa.cc' })).toStrictEqual({ "success": true, "message": "" });
  expect(isDomain({ str: 'aaa' })).toStrictEqual({ "message": "域名格式错误.", "success": false });
  expect(isDomain({ str: '*.aaa.cc' })).toStrictEqual({
    "message": "域名关键字只能包含a-z、A-Z、0-9、-、_、.、中文汉字.",
    "success": false
  });
  expect(isDomain({ str: 'aaa.cc.' })).toStrictEqual({ "success": false, "message": "TLD格式错误." });
  expect(isDomain({ str: '.aaa.cc.' })).toStrictEqual({ success: false, message: "TLD格式错误." });
  expect(isDomain({ str: '.aaa.cc' })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isDomain({ str: 'aa_a.cc' })).toStrictEqual({ "success": true, "message": "" });
  expect(isDomain({ str: '.aa_a.11' })).toStrictEqual({ "success": false, "message": "TLD不能包含数字." });
  expect(isDomain({ str: '.a__a_a.cc' })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isDomain({ str: '.a__a1_a.cc' })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isDomain({
    str: 'a__a1_a.cc',
    config: { allow_underscores: false }
  })).toStrictEqual({ "message": "域名关键字不能包含 _", "success": false });
  expect(isDomain({ str: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.cc' })).toStrictEqual({
    "message": "域名关键字的长度最多为 63 个字符.",
    "success": false
  });
})
