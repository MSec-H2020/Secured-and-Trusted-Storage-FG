exports.rewrite = {
  name: 'rewrite',
  policy: (actionParams) => {
    return (req, res, next) => {
      req.url = req.url.replace(actionParams.search, actionParams.replace);
      next() // calling next policy
    };
  }
};

exports.redirect = {
  name: 'redirect',
  policy: (actionParams) => {
    return (req, res, next) => {
      req.url = actionParams.url;
      next() // calling next policy
    };
  }
};