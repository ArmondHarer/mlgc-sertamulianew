const tf = require("@tensorflow/tfjs-node");
async function loadModel() {
  return tf.loadGraphModel(
    "https://storage.googleapis.com/bucket-mlgc-armondharer/model.json"
  );
}
module.exports = loadModel;
