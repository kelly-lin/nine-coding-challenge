function IsValidJsonString(string) {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  
  return true;
}

module.exports.IsValidJsonString = IsValidJsonString;