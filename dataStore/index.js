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

function decrementById( id ){
  let counter = getById(id);
  counter.count--;
  return counter;
}

function create( counter ){
  if( getById(counter.id) ){
    return false;
  }

  data[counter.id] = {
    count : counter.count
  };

  return data[counter.id];
}

module.exports = (()=> ({
  data,
  getById,
  incrementById,
  decrementById,
  create
}))();
