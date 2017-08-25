export default {
    getGlobalMarkers: () => {
      // This fixture only supports gantman or else returns skellock
      const gantmanData = require('../Fixtures/gantman.json')
      const skellockData = require('../Fixtures/skellock.json')
      return {
        ok: true,
        data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
      }
    }
  }
  