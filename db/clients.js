'use strict';

const clients = [
    { id: '1', name: 'Samplr', clientId: 'abc123', clientSecret: 'ssh-secret', isTrusted: true, callbackUrl: 'http://localhost:3000' },
    { id: '2', name: 'Samplr2', clientId: 'xyz123', clientSecret: 'ssh-password', isTrusted: false, callbackUrl: 'http://localhost:3000' },
    { id: '3', name: 'Wall Street Doc', clientId: 'coding_test', clientSecret: 'bwZm5XC6HTlr3fcdzRnD', isTrusted: false, callbackUrl: 'http://localhost:3000' },

];

module.exports.findById = (id, done) => {
    for (let i = 0, len = clients.length; i < len; i++) {
        if (clients[i].id === id) return done(null, clients[i]);
    }
    return done(new Error('Client Not Found'));
};

module.exports.findByClientId = (clientId, done) => {
    for (let i = 0, len = clients.length; i < len; i++) {
        if (clients[i].clientId === clientId) return done(null, clients[i]);
    }
    return done(new Error('Client Not Found'));
};
