'use strict';

import Transport from './lib/transport';
import Stations from './lib/resources/velov/stations';
import Status from './lib/resources/velov/status';

import extend from 'extend';

export default class ApiLyon {

  /**
   * Instantiate Api.
   *
   * @param {{}} options
   */
  constructor (options) {
    this.options = options;

    this.transport = new Transport(this.options);

    this.velov = {
      stations: new Stations(this.transport),
      status  : new Status(this.transport)
    };
  }

  /**
   * Getter for options.
   *
   * @returns {*}
   */
  get options () {
    return this._options;
  }

  /**
   * Setter for options.
   *
   * @param {{}} options
   */
  set options (options) {
    this._options = extend(true, {
      endpoint: 'https://download.data.grandlyon.com/'
    }, options);
  }

}
