'use strict';

const users = [{
    id: '1',
    username: 'bob',
    password: 'secret',
    name: 'Julie Smith',
    email: 'email@email.com',
    mobile: '09090909090',
    googleplus: 'googleplus',
    twitter: 'twitter',
    facebook: 'facebook',
    job: 'Doctor',
    bio: 'Lorem ipsum dolor sit amet, est in unum sale, populo placerat no eam. Vis te diam illud tincidunt, at purto possit referrentur pro. Mea in dicta libris. Posse verear offendit cum an, quo ne malorum partiendo. Sit suas errem vitae te, bonorum deleniti mea ne, id labore offendit epicurei sea.',
    img: 'http://lorempixel.com/100/100/people/9/',
    projects: []
}, {
    id: '2',
    username: 'joe',
    password: 'password',
    name: 'Joe Davis',
    email: 'email@email2.com',
    mobile: '09090909090',
    googleplus: 'googleplus',
    twitter: 'twitter',
    facebook: 'facebook',
    job: 'Investor',
    bio: 'Ea duo autem erant, an per virtute impedit theophrastus, diceret epicuri detraxit in duo. Sed ea prima ocurreret, dicta molestie dissentiet vim ex. Vel everti utamur iracundia no, odio bonorum lobortis per et. An mundi vivendo sententiae vis, at inani viris feugait eum. Novum sententiae cu sea, sea at soluta perpetua.',
    img: 'http://lorempixel.com/100/100/people/3/',
    projects: []
}, {
    id: '3',
    username: 'codingtest',
    password: 'password09876',
    name: 'Wall Street Doc',
    email: 'email@email3.com',
    mobile: '09090909090',
    googleplus: 'googleplus',
    twitter: 'twitter',
    facebook: 'facebook',
    job: 'Wall Street Trader',
    bio: 'Ea duo autem erant, an per virtute impedit theophrastus, diceret epicuri detraxit in duo. Sed ea prima ocurreret, dicta molestie dissentiet vim ex. Vel everti utamur iracundia no, odio bonorum lobortis per et. An mundi vivendo sententiae vis, at inani viris feugait eum. Novum sententiae cu sea, sea at soluta perpetua.',
    img: 'http://lorempixel.com/100/100/people/5/',
    projects: []
}, ];


module.exports.findById = (id, done) => {
    for (let i = 0, len = users.length; i < len; i++) {
        if (users[i].id === id) return done(null, users[i]);
    }
    return done(new Error('User Not Found'));
};

module.exports.findByUsername = (username, done) => {
    for (let i = 0, len = users.length; i < len; i++) {
        if (users[i].username === username) return done(null, users[i]);
    }
    return done(new Error('User Not Found'));
};
