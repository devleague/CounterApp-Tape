'use strict';

const data = {
  1 : { count : 1 }
};

function getById( id ){
  return data[id];
}

function incrementById( id ){
  let counter = getById(id);
  counter.count++;
  return counter;
}

module.exports = (()=> ({
  data,
  getById,
  incrementById
}))();
