var base = require("../../client/base"),
    VolumeManager = require('./volumes'),
    SnapshotManager = require('./snapshots'),
    QuotaManager = require('./quotas'),
    LimitManager = require('./limits');

var Cinder = base.Client.extend({
  service_type: "volume",
  version: "1",

  init: function (options) {
    this._super(options);

    this.volumes = new VolumeManager(this);
    this.snapshots = new SnapshotManager(this);
    this.quotas = new QuotaManager(this);
    this.limits = new LimitManager(this);
  }
});

module.exports = Cinder;
