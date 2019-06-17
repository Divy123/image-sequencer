const test = require('tape'),
  ImageSequencer = require('../../../src/ImageSequencer'),
  image = require('../images/IS-QR'),
  options = {
    offset: -1
  };

let sequencer = ImageSequencer({ui: false});
sequencer.loadImages(image);
sequencer.addSteps('brightness', {});
sequencer.addSteps('blend', options);

test('blend module', t => {
  var startTime = Date.now();
  sequencer.run({mode: 'test'}, () => {
    var endTime = Date.now();
    console.log(`Module blend: ran in ${(endTime - startTime)} milliseconds`);
    sequencer = null;
    t.end();
  });
});