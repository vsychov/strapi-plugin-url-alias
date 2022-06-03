'use strict';

module.exports = [
  {
    method: "GET",
    path: "/info/getContentTypes",
    handler: "info.getContentTypes",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/info/getLanguages",
    handler: "info.getLanguages",
    config: {
      policies: [],
    },
  },
];
