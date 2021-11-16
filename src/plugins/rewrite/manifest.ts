module.exports = {
   version: '1.2.0',
   init: function (pluginContext) {
      const policy = require('./policies/rewrite-policy');
      pluginContext.registerPolicy(policy.rewrite);
      pluginContext.registerPolicy(policy.redirect);
   }
}