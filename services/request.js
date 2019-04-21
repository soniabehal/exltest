const request = require("request");
const util = require("util");

function requestUrl(query, callback) {
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:query })
  };

  request.post(process.env.GRAPHQL_URL, opts, (err, meta, body) => {
    callback(null, { body: JSON.parse(body), err, meta });
  })
}

module.exports = util.promisify(requestUrl);
