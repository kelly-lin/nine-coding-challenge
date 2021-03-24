function IsValidJsonString(string) {
  if(typeof string === 'object' && string != null) return true;
  
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  
  return true;
}

module.exports.IsValidJsonString = IsValidJsonString;