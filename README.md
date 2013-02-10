# Passport-KtT

[Passport](http://passportjs.org/) strategy for authenticating with [KtT](http://id.kreativitaet-trifft-technik.de/openidserver)
using OpenID 2.0.

This module lets you authenticate using the KtT OpenID Infrastructure in your Node.js applications.
By plugging into Passport, KtT authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

**Attention:** This Strategy currently doesn't work. It will as soon as we finished updating the Single-Signon Infrastructure. Which is currently ongoing.


## Installation

    $ npm install passport-ktt

## Usage

#### Configure Strategy

The KtT authentication strategy authenticates users using a KtT account,
which is also an OpenID 2.0 identifier.  The strategy requires a `validate`
callback, which accepts this identifier and calls `done` providing a user.
Additionally, options can be supplied to specify a return URL and realm.

    passport.use(new KtTStrategy({
        returnURL: 'http://localhost:3000/auth/ktt/return',
        realm: 'http://localhost:3000/'
      },
      function(identifier, done) {
        User.findByOpenID({ openId: identifier }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'ktt'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/ktt',
      passport.authenticate('ktt'),
      function(req, res){
        // The request will be redirected to KtT for authentication, so
        // this function will not be called.
      });

    app.get('/auth/ktt/callback', 
      passport.authenticate('ktt', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [signon example](https://github.com/ktt-ol/passport-ktt/tree/master/examples/signon).

## Credits

- [Martin Hilscher](http://github.com/xinitrc)

Based on passport-google

- [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2011 Martin Hilscher

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
