/**
 * Token.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        token_id: {
            type: 'integer',
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },

        user_id: {
            type: 'integer',
            required: true
        },

        token: {
            type: 'string',
            defaultsTo: ''
        },
        isValid: {
            type: 'boolean',
            defaultsTo: false
        },
        os: {
            type: 'string',
            defaultsTo: ''
        },
        agent: {
            type: 'string',
            defaultsTo: ''
        },
        device: {
            type: 'string',
            defaultsTo: ''
        },
        latitude: {
            type: 'string',
            defaultsTo: ''
        },
        longitude: {
            type: 'string',
            defaultsTo: ''
        },
        ip: {
            type: 'string',
            defaultsTo: ''
        }

    }
};

