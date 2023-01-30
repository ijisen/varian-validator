import isDomain from "../http/isDomain";

// is zone
const isZone = (str: string, lang?: string) => {
  const rootZone = '.';
  if(rootZone === str) {
    return true;
  }
  const { success } = isDomain({
    str,
    lang,
    config: {
      allow_trailing_dot: true
    }
  });
  return success;
};

export default isZone
