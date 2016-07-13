'use strict';

const counters = {
  data : {
    1 : { count : 1 }
  },

  getById( id ){
    return counters.data[id];
  }

};
module.exports = (()=> counters)();
