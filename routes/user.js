'use strict';

const passport = require('passport');

module.exports.info = [
    passport.authenticate('bearer', { session: true }),
    (request, response) => {
        // request.authInfo is set using the `info` argument supplied by
        // `BearerStrategy`. It is typically used to indicate scope of the token,
        // and used in access control checks. For illustrative purposes, this
        // example simply returns the scope in the response.
        response.json({
            user_id: request.user.id,
            name: request.user.name,
            bio: request.user.bio,
            img: request.user.img,
            job: request.user.job,
            email: request.user.email,
            mobile: request.user.mobile,
            projects: request.user.projects,
            googleplus: request.user.googleplus,
            twitter: request.user.twitter,
            facebook: request.user.facebook,
            scope: request.authInfo.scope
        });
    }
];
