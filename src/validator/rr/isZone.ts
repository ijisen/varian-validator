import isDomain from "../http/isDomain";

// is zone
const isZone = (str: string) => {
  const rootZone = '.';
  return rootZone === str || isDomain(str);
};

export default isZone
