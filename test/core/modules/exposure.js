const testModule = require('../templates/module-test'),
  benchmark = 'data:image/png;base64,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',
  image = require('../images/IS-QR'),
  options = {
    exposure: 3
  };

testModule('exposure', options, benchmark, image)