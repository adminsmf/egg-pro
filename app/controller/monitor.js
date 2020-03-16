/*
 * @Author: ray_sun
 * @Date: 2020-03-16 15:37:11
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-16 16:36:45
 */
'use strict';

const Controller = require('egg').Controller;
// const { getOriginSource } = require('../utils/sourcemap')
const fs = require('fs');
const path = require('path');

class MonitorController extends Controller {
  async index() {
    const { ctx } = this;
    const { info } = ctx.query;
    const json = JSON.parse(Buffer.from(info, 'base64').toString('utf-8'));
    console.log('fronterror:', json);
    this.ctx.getLogger('frontendLogger').error(json);
    ctx.body = '';
  }
}

module.exports = MonitorController;
