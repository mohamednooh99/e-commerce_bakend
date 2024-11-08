'use strict';

/**
 * another-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::another-product.another-product');
