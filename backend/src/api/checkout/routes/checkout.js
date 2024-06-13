'use strict';

/**
 * checkout router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::checkout.checkout');
