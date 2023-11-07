import { isFQDN, IsFQDNConfig } from "../lib";

const config: IsFQDNConfig = {
  // 是否包含TLD
  require_tld: true,
  // 是否允许包含下划线
  allow_underscores: true,
  // 是否允许 . 号结尾
  allow_trailing_dot: false,
  // 是否允许纯数字TLD
  allow_numeric_tld: false,
  // 是否允许配符 *
  allow_wildcard: false,
  // 是否允许TLD包含 -
  allow_hyphen_tld: false,
}
test('isFQDN validate test', () => {
  expect(isFQDN(0))
    .toStrictEqual({
      "success": false,
      "message": "请输入域名."
    });
  expect(isFQDN('       '))
    .toStrictEqual({
      "success": false,
      "message": "请输入域名."
    });
  expect(isFQDN('hh.mm'))
    .toStrictEqual({
      "success": true,
      "message": ""
    });
  expect(isFQDN('aaa'))
    .toStrictEqual({
      "message": "域名格式错误.",
      "success": false
    });
  expect(isFQDN('*.aaa.cc', {
    allow_underscores: true
  }))
    .toStrictEqual({
      "message": "域名关键字只能包含a-z、A-Z、0-9、-、_、.、中文汉字.",
      "success": false
    });
  expect(isFQDN('*.aaa.cc'))
    .toStrictEqual({
      "message": "域名关键字只能包含a-z、A-Z、0-9、-、.、中文汉字.",
      "success": false
    });
  expect(isFQDN('aaa.cc.'))
    .toStrictEqual({
      "success": false,
      "message": "TLD格式错误."
    });
  expect(isFQDN('.aaa.cc.'))
    .toStrictEqual({
      success: false,
      message: "TLD格式错误."
    });
  expect(isFQDN('.aaa.cc'))
    .toStrictEqual({
      "message": "域名格式错误.",
      "success": false
    });
  expect(isFQDN('.aaa.cc.'))
    .toStrictEqual({
      "message": "TLD格式错误.",
      "success": false
    });
  expect(isFQDN('aaa.cc.'))
    .toStrictEqual({
      "message": "TLD格式错误.",
      "success": false
    });
  expect(isFQDN('.aaa.cc'))
    .toStrictEqual({
      "message": "域名格式错误.",
      "success": false
    });
  /**  不允许下划线 */
  expect(isFQDN('aa_a.cc')).toStrictEqual({
    "success": false,
    "message": "域名关键字不能包含 _"
  });
  expect(isFQDN('.aa_a.11')).toStrictEqual({
    "success": false,
    "message": "TLD不能包含数字."
  });
  expect(isFQDN('.aa_a.aa')).toStrictEqual({
    "success": false,
    "message": "域名格式错误."
  });
  expect(isFQDN('a__a_a.cc')).toStrictEqual({
    "message": "域名关键字不能包含 _",
    "success": false
  });
  expect(isFQDN('a__a_a.c_c')).toStrictEqual({
    "message": "TLD格式错误.",
    "success": false
  });
  /**  END 不允许下划线 */

  /**  允许下划线 */
  expect(isFQDN('aa_a.cc', {
    allow_underscores: true
  })).toStrictEqual({
    "success": true,
    "message": ""
  });
  expect(isFQDN('.aa_a.11', {
    allow_underscores: true
  })).toStrictEqual({
    "success": false,
    "message": "TLD不能包含数字."
  });
  expect(isFQDN('.a__a_a.cc', {
    allow_underscores: true
  })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isFQDN('.a__a1_a.c_c', {
    allow_underscores: true
  })).toStrictEqual({
    "message": "TLD格式错误.",
    "success": false
  });
  /**  END _允许下划线 */

  /**  TLD 是否允许中划线 */
  expect(isFQDN('aaaa.a-a1-a.c-c')).toStrictEqual({
    "message": "TLD格式错误.",
    "success": false
  });
  expect(isFQDN('aaaa.a-a1-a.cc')).toStrictEqual({
    "message": "TLD格式错误",
    "success": false
  });
  expect(isFQDN('aaaa.a-a1-a.c-c', {
    ...config,
    allow_hyphen_tld: true
  })).toStrictEqual({
    "message": "",
    "success": true
  });
  expect(isFQDN('aaaa.a-a1-a.cc-', {
    ...config,
    allow_hyphen_tld: true
  })).toStrictEqual({
    "message": "域名关键字不能以 - 开头或结尾.",
    "success": false
  });
  /**  TLD END 是否允许中划线 */

  /**  TLD max_node 限制 */
  expect(isFQDN('aaaa.a-a1-a.cc-', {
    ...config,
    // 允许tld包含 -
    allow_hyphen_tld: true,
    allow_underscores: false,
  })).toStrictEqual({
    "message": "域名关键字不能以 - 开头或结尾.",
    "success": false
  });
  expect(isFQDN('aaaa.a-a1-a.cc-', {
    ...config,
    // 不允许tld包含 -
    allow_hyphen_tld: false,
    allow_underscores: false,
  })).toStrictEqual({
    "message": "TLD格式错误.",
    "success": false
  });
  // 节点数超限
  expect(isFQDN('aaaa.a-a1-a.cc-', {
    ...config,
    allow_underscores: false,
    max_node: 2
  })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isFQDN('aaaa.a-a1-a.cc-', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    require_tld: false,
    max_node: 1
  })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isFQDN('aaaa', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    require_tld: false,
    max_node: 1
  })).toStrictEqual({
    "message": "",
    "success": true
  });
  expect(isFQDN('aaaa', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    require_tld: true,
    max_node: 1
  })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isFQDN('aaaa.cc', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    require_tld: true,
    // 后台自动容错 =》 max_node => 2
    max_node: 1
  })).toStrictEqual({
    "message": "",
    "success": true
  });
  expect(isFQDN('aaaa.cc', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    require_tld: false,
    // 后台自动容错 =》 max_node => 2
    max_node: 1
  })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isFQDN('aaaa.a-a1-a.cc-', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    require_tld: true,
    max_node: 1
  })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isFQDN('aaaa.a-a1-a.cc-', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    require_tld: true,
    max_node: 1
  })).toStrictEqual({
    "message": "域名格式错误.",
    "success": false
  });
  expect(isFQDN('aaaa-aa_a', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    require_tld: false,
    max_node: 1
  })).toStrictEqual({
    "message": "域名关键字不能包含 _",
    "success": false
  });
  expect(isFQDN('a.dne.zdns.com.cn', {
    ...config,
    allow_hyphen_tld: false,
    allow_underscores: false,
    max_node: 5,
  })).toStrictEqual({
    "message": "",
    "success": true
  });
  /**  TLD END 是否允许中划线 */
})
