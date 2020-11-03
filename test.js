// const jwt = require("jsonwebtoken");
// const pvt = "thisissparta";
// const payload = { username: "johnsmith", email: "john@gmail.com" };
// const token = jwt.sign(payload, pvt);
// console.log(token);
// const dataVerified = jwt.verify(token, pvt);
// console.log(dataVerified);
const bcrypt = require("bcryptjs");
const myfunc = async () => {
  const password = "nanda";
  const hashedPass = await bcrypt.hash(password, 8);
  console.log(hashedPass);
  const match = await bcrypt.compare(
    password,
    "$2a$08$Qv5VO.2ah3ZDv05nLz.65eTnRCNNadfdBQ9gkmkQyGNm7GMcmEm/e"
  );
  console.log(match);
};
myfunc();
