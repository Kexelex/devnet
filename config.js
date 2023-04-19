// var rtg = require("url").parse(process.env.REDISTOGO_URL);
// var redis = require("redis").createClient(rtg.port, rtg.hostname);

export const config = {
  className: "posts",
  numOfRecsStore: 50,
  sampleContent: false,
  remoteMongoDbURL: "mongodb://localhost:27017/devnet", // remote mongo DB url
  localSetup: false,
};
