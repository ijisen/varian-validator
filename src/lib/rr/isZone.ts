// is zone
import isDomain from "../http/isDomain";

const isZone = (str: string) => {
  const rootZone = '.';
  return rootZone === str || isDomain(str);
};

export default isZone
