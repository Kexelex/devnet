class Config {
  constructor(args) {
    this.nearestNeighbors = 5;
    this.className = "posts";
    this.numOfRecsStore = 50;
    this.factorLeastSimilarLeastLiked = false;
    this.redisUrl = "redis://localhost:6379";
    this.redisPort = 23559;
    this.remoteMongoDbURL = "mongodb://localhost:27017/devnet"; // remote mongo DB url
    this.flushDBsOnStart = true;
    this.localSetup = false;
  }
}

module.exports = exports = new Config();
