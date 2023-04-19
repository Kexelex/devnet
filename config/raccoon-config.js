class Config {
  // rtg = require("url").parse(process.env.REDISTOGO_URL);
  // redis = require("redis").createClient(rtg.port, rtg.hostname);

  constructor(args) {
    this.className = "posts";
    this.numOfRecsStore = 50;
    this.sampleContent = false;
    // this.redisUrl = rtg || '127.0.0.1';
    // this.redisPort = rtg.port || 9369;
    // this.redisAuth = rtg.hostname || '';
    this.remoteMongoDbURL = "mongodb://localhost:27017/devnet"; // remote mongo DB url
    this.localSetup = false;
  }
}

module.exports = exports = new Config();
