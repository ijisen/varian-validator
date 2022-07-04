

/**
 * @names：模拟表单提交数据
 * @params[config] Object
 * */
export const utilsSubmitForm = (config: {
  url: string;
  method: string;
  params: { [propName: string]: any };
}) => {
  config = config || {};
  const action = config.url;
  const method = config.method || 'POST';
  const params = config.params || {};
  const form = document.createElement('form');

  form.style.display = 'none';
  form.method = method;
  form.action = action;
  // form.target = '_blank';

  for (let [key, value] of Object.entries(params)) {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }
  /*for (let i = 0, j = params.length; i < j; i++) {
    let input = document.createElement('input');
    let item = params[i];
    let key = item.key;
    let value = item.value;
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }*/
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};
