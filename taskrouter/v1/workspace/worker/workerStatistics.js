'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var WorkerStatisticsList;
var WorkerStatisticsPage;
var WorkerStatisticsInstance;
var WorkerStatisticsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsList
 * @description Initialize the WorkerStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} workerSid - The worker_sid
 */
/* jshint ignore:end */
WorkerStatisticsList = function WorkerStatisticsList(version, workspaceSid,
                                                      workerSid) {
  /* jshint ignore:start */
  /**
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsContext}
   */
  /* jshint ignore:end */
  function WorkerStatisticsListInstance(sid) {
    return WorkerStatisticsListInstance.get(sid);
  }

  WorkerStatisticsListInstance._version = version;
  // Path Solution
  WorkerStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a worker_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsList
   * @instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsContext}
   */
  /* jshint ignore:end */
  WorkerStatisticsListInstance.get = function get() {
    return new WorkerStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.workerSid
    );
  };

  return WorkerStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsPage
 * @augments Page
 * @description Initialize the WorkerStatisticsPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns WorkerStatisticsPage
 */
/* jshint ignore:end */
WorkerStatisticsPage = function WorkerStatisticsPage(version, response,
                                                      solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(WorkerStatisticsPage.prototype, Page.prototype);
WorkerStatisticsPage.prototype.constructor = WorkerStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of WorkerStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkerStatisticsInstance
 */
/* jshint ignore:end */
WorkerStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new WorkerStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.workerSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsInstance
 * @description Initialize the WorkerStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} cumulative - The cumulative
 * @property {string} workerSid - The worker_sid
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} workerSid - The worker_sid
 */
/* jshint ignore:end */
WorkerStatisticsInstance = function WorkerStatisticsInstance(version, payload,
    workspaceSid, workerSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.cumulative = payload.cumulative; // jshint ignore:line
  this.workerSid = payload.worker_sid; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid,
  };
};

Object.defineProperty(WorkerStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkerStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.workerSid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkerStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkerStatisticsInstance
 */
/* jshint ignore:end */
WorkerStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsContext
 * @description Initialize the WorkerStatisticsContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} workerSid - The worker_sid
 */
/* jshint ignore:end */
WorkerStatisticsContext = function WorkerStatisticsContext(version,
                                                            workspaceSid,
                                                            workerSid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers/<%= workerSid %>/Statistics' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a WorkerStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkerStatisticsInstance
 */
/* jshint ignore:end */
WorkerStatisticsContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Minutes': _.get(opts, 'minutes'),
    'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
    'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate'))
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkerStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workerSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  WorkerStatisticsList: WorkerStatisticsList,
  WorkerStatisticsPage: WorkerStatisticsPage,
  WorkerStatisticsInstance: WorkerStatisticsInstance,
  WorkerStatisticsContext: WorkerStatisticsContext
};
