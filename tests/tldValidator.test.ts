import { tldValidator } from "../lib";
const config = {
  tld: '',
  option: {
    // 是否允许数字TLD号结尾, 默认: false
    allow_numeric_tld: false,
    // 是否允许TLD包含 -, 默认: false
    allow_hyphen_tld: false,
  },
  lang: 'en'
}
test('tldValidator validate test', () => {
  expect(tldValidator({
    ...config
  }))
    .toStrictEqual({
      "success": false,
      "message": "TLD格式错误."
    });

  expect(tldValidator({
    ...config,
    tld: 'x-sdfdsx-sdfsdfsdf'
  }))
    .toStrictEqual({
      "success": false,
      "message": "TLD格式错误."
    });

  expect(tldValidator({
    ...config,
    tld: '-x-sdfdsx-sdfsdfsdf-'
  }))
    .toStrictEqual({
      "success": false,
      "message": "TLD格式错误."
    });

  expect(tldValidator({
    ...config,
    tld: '-x-sdfdsx-sdfsdfsdf_1'
  }))
    .toStrictEqual({
      "success": false,
      "message": "TLD格式错误."
    });

  expect(tldValidator({
    ...config,
    tld: 'xxxxxfghyfghjygfghjgfghhgtf.gygfrdfgyhujhgtgfrdfgtgggggggggggggggggg'
  }))
    .toStrictEqual({
      "success": false,
      "message": "TLD格式错误."
    });
})
