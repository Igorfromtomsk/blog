const pgp = require("pg-promise")();
const db = pgp("postgres://igorfromtomsk:cegthgfhjkm42@localhost:5432/blog");
const fs = require('fs');

const SERVER_DIR = './server/';
const MIGRATIONS = './migrations';
const SEEDS = './seeds';

function migrations() {
  fs.readdir(SERVER_DIR+MIGRATIONS, (error, items) => {
    if (error) {
      console.error('ERROR: ', error);
    }

    items.forEach((item, i) => {
      fs.readFile(SERVER_DIR+MIGRATIONS+'/'+item, (i, file) => {
        db
          .query(file.toString())
          .then(data => {
            console.log('migrations '+item+' was applied width '+!!data+' status.');
          })
          .catch(error => {
            console.error('ERROR: ', error);
          })
      })
    })
  });
}

function seeds() {
  fs.readdir(SERVER_DIR+SEEDS, (error, items) => {
    if (error) {
      console.error('ERROR: ', error);
    }

    items.forEach((item, i) => {
      fs.readFile(SERVER_DIR+SEEDS+'/'+item, (i, file) => {
        db
          .query(file.toString())
          .then(data => {
            console.log('seeds '+item+' was applied width '+!!data+' status.');
          })
          .catch(error => {
            console.error('ERROR: ', error);
          })
      })
    })
  });
}

module.exports = {
  migrations: migrations,
  seeds: seeds
};
