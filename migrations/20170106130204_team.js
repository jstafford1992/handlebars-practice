'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.createTable('team', function(table){
      table.increments();
      table.string('Team-Name');
      table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team');
};
