(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    28: function(e, a, t) {
      e.exports = t.p + 'static/media/bob.49a7474b.jpg';
    },
    44: function(e, a, t) {
      e.exports = t.p + 'static/media/TechMax.399e42e1.png';
    },
    53: function(e, a, t) {
      e.exports = t(68);
    },
    58: function(e, a, t) {},
    63: function(e, a, t) {},
    64: function(e, a, t) {},
    68: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t(1),
        n = t.n(l),
        r = t(41),
        c = t.n(r),
        m = t(75),
        s = t(50),
        i = t(26),
        u = t(51),
        o = t(52),
        E = (t(58), t(23)),
        d = t(28),
        p = t.n(d),
        v = t(9);
      var h = function() {
          var e = ['/', 'about', 'drivers'];
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              'header',
              null,
              n.a.createElement(
                'nav',
                { className: 'flex flex-end flex-align-center' },
                ['Home', 'About', 'Drivers'].map(function(a, t) {
                  return n.a.createElement(
                    v.b,
                    { key: a, to: e[t] },
                    n.a.createElement('div', null, a),
                  );
                }),
                n.a.createElement('img', { src: p.a, alt: 'Admin' }),
              ),
            ),
          );
        },
        N = t(11);
      var f = function(e) {
        return n.a.createElement(
          'div',
          { className: 'flex flex-space-evenly summary' },
          n.a.createElement(
            'div',
            { className: 'summary-item' },
            n.a.createElement(
              'p',
              null,
              n.a.createElement(N.j, null),
              ' Total Users',
            ),
            n.a.createElement(
              'span',
              { className: 'h1' },
              '000'.concat(Number(e.male) + Number(e.female)).slice(-4),
            ),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item border' },
            n.a.createElement('p', null),
            n.a.createElement('span', { className: 'h1' }),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item' },
            n.a.createElement(
              'p',
              null,
              n.a.createElement(N.g, null),
              ' Male Users',
            ),
            n.a.createElement(
              'span',
              { className: 'h1' },
              '00000'.concat(e.male).slice(-4),
            ),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item border' },
            n.a.createElement('p', null),
            n.a.createElement('span', { className: 'h1' }),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item' },
            n.a.createElement(
              'p',
              null,
              n.a.createElement(N.e, null),
              ' Female Users',
            ),
            n.a.createElement(
              'span',
              { className: 'h1' },
              '00000'.concat(e.female).slice(-4),
            ),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item border' },
            n.a.createElement('p', null),
            n.a.createElement('span', { className: 'h1' }),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item' },
            n.a.createElement(
              'p',
              null,
              n.a.createElement(N.b, null),
              ' Total Earnings (In Naira)',
            ),
            n.a.createElement('span', { className: 'h1' }, e.billedTotal),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item border' },
            n.a.createElement('p', null),
            n.a.createElement('span', { className: 'h1' }),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item' },
            n.a.createElement(
              'p',
              null,
              n.a.createElement(N.d, null),
              ' Cash Earnings (In Naira)',
            ),
            n.a.createElement('span', { className: 'h1' }, e.cashBilledTotal),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item border' },
            n.a.createElement('p', null),
            n.a.createElement('span', { className: 'h1' }),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item' },
            n.a.createElement(
              'p',
              null,
              n.a.createElement(N.c, null),
              ' Card Earnings (In Naira)',
            ),
            n.a.createElement(
              'span',
              { className: 'h1' },
              e.nonCashBilledTotal,
            ),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item border' },
            n.a.createElement('p', null),
            n.a.createElement('span', { className: 'h1' }),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item' },
            n.a.createElement(
              'p',
              null,
              n.a.createElement(N.a, null),
              ' ',
              n.a.createElement(N.h, null),
              ' Cash Trips',
            ),
            n.a.createElement(
              'span',
              { className: 'h1' },
              '00000'.concat(e.noOfCashTrips).slice(-4),
            ),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item border' },
            n.a.createElement('p', null),
            n.a.createElement('span', { className: 'h1' }),
          ),
          n.a.createElement(
            'div',
            { className: 'summary-item' },
            n.a.createElement(
              'p',
              null,
              n.a.createElement(N.a, null),
              ' ',
              n.a.createElement(N.c, null),
              ' Non Cash Trips',
            ),
            n.a.createElement(
              'span',
              { className: 'h1' },
              '00000'.concat(e.noOfNonCashTrips).slice(-4),
            ),
          ),
        );
      };
      var b = function(e) {
          var a = e.trips;
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              'div',
              { className: 'flex flex-space-evenly table-title' },
              n.a.createElement('p', null, 'Info'),
              n.a.createElement('p', null, 'Trip ID'),
              n.a.createElement('p', null, 'Username'),
              n.a.createElement('p', null, 'Gender'),
            ),
            a.map(function(e) {
              return n.a.createElement(
                v.b,
                {
                  className: 'table-item',
                  key: e.tripID,
                  to: ''.concat(e.tripID),
                },
                n.a.createElement(
                  'div',
                  { className: 'flex flex-space-evenly table-item hover' },
                  n.a.createElement(
                    'p',
                    null,
                    n.a.createElement(
                      'button',
                      { className: 'single-trip-button' },
                      n.a.createElement(
                        'span',
                        { className: 'button-info' },
                        n.a.createElement(N.f, null),
                        ' View',
                      ),
                    ),
                  ),
                  n.a.createElement(
                    'p',
                    { title: e.tripID },
                    e.tripID.slice(0, 8) + '...',
                  ),
                  n.a.createElement('p', null, e.user.name),
                  n.a.createElement('p', null, e.user.gender),
                ),
              );
            }),
          );
        },
        y = t(29);
      var g = function(e) {
          var a = e.data,
            t = e.cash,
            l = e.billed,
            r = e.trips;
          return (
            e.drivers,
            n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(
                'div',
                { className: 'flex chart flex-space-evenly' },
                n.a.createElement(
                  'div',
                  { className: 'pie-chart' },
                  n.a.createElement('h3', null, 'Users Gender Information'),
                  n.a.createElement(y.a, {
                    chartType: 'PieChart',
                    height: '20em',
                    width: '20em',
                    data: a,
                    options: { pieHole: 0, is3D: !0 },
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: 'pie-chart' },
                  n.a.createElement('h3', null, 'Trips Cash Information'),
                  n.a.createElement(y.a, {
                    chartType: 'PieChart',
                    height: '20em',
                    width: '20em',
                    data: t,
                    options: { pieHole: 0, is3D: !0 },
                  }),
                ),
              ),
              n.a.createElement(
                'div',
                { className: 'flex-center-main chart' },
                n.a.createElement(
                  'div',
                  { className: 'bar-chart' },
                  n.a.createElement('h3', null, 'Billings Information'),
                  n.a.createElement(y.a, {
                    chartType: 'Bar',
                    height: '400px',
                    width: '100%',
                    data: l,
                    options: {
                      title: 'Trip Information By Amount Billed',
                      pieHole: 0,
                      is3D: !0,
                    },
                  }),
                ),
              ),
              n.a.createElement(
                'div',
                { className: 'table-wrapper' },
                n.a.createElement('h3', null, 'Trips Information'),
                n.a.createElement(
                  'div',
                  { className: 'table-home' },
                  n.a.createElement(b, { trips: r }),
                ),
              ),
            )
          );
        },
        T = t(20);
      t(63);
      var D = function(e) {
          var a = e.trip,
            t = e.previous,
            l = e.next,
            r = e.drivers;
          console.log(a), console.log(r);
          var c = r.filter(function(e) {
            return e.driverID === a.driverID;
          })[0];
          (c = c || 'Not Found'), console.log(c);
          var m,
            s = '/' === t ? 'Home' : 'Previous',
            i = new Date(a.created),
            u = i.getDay();
          return (
            (m =
              1 === u
                ? 'Monday'
                : 2 === u
                ? 'Tuesday'
                : 3 === u
                ? 'Wednessday'
                : 4 === u
                ? 'Thursday'
                : 5 === u
                ? 'Friday'
                : 6 === u
                ? 'Saturday'
                : 0 === u
                ? 'Sunday'
                : 'No day'),
            n.a.createElement(
              'section',
              { className: 'trip-page' },
              n.a.createElement(
                'div',
                { className: 'flex' },
                n.a.createElement(
                  'div',
                  { className: 'trip-link' },
                  n.a.createElement(
                    'button',
                    { className: 'link' },
                    n.a.createElement(
                      v.b,
                      { to: t },
                      n.a.createElement(T.c, null),
                      ' ',
                      s,
                    ),
                  ),
                  l
                    ? n.a.createElement(
                        v.b,
                        { to: l },
                        n.a.createElement(
                          'button',
                          { className: 'link' },
                          'Next ',
                          n.a.createElement(T.d, null),
                        ),
                      )
                    : n.a.createElement(
                        'button',
                        null,
                        "You've Reached The End",
                      ),
                ),
              ),
              n.a.createElement(
                'div',
                { className: 'flex flex-space-around' },
                n.a.createElement(
                  'div',
                  { className: 'trip' },
                  n.a.createElement('h1', null, 'Trip Details'),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'Identification Number'),
                    n.a.createElement('p', null, a.tripID),
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'Time'),
                    n.a.createElement(
                      'p',
                      null,
                      ''
                        .concat(m, ' ')
                        .concat(i.getDate(), ',  ')
                        .concat('00'.concat(i.getMonth() + 1).slice(-2), ' ')
                        .concat(i.getFullYear()),
                    ),
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'User Details'),
                    n.a.createElement('p', null, 'Name: ', a.user.name),
                    n.a.createElement('p', null, 'Email: ', a.user.email),
                    n.a.createElement('p', null, 'Phone: ', a.user.phone),
                    n.a.createElement('p', null, 'Gender: ', a.user.gender),
                    n.a.createElement('p', null, 'Company: ', a.user.company),
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'Pick Up Details '),
                    n.a.createElement(
                      'p',
                      null,
                      'Pick Up Address: ',
                      a.pickup.address,
                    ),
                    n.a.createElement(
                      'p',
                      null,
                      'Pick Up Latitude: ',
                      a.pickup.latitude,
                    ),
                    n.a.createElement(
                      'p',
                      null,
                      'Pick Up Longitude: ',
                      a.pickup.longitude,
                    ),
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'Destination Details '),
                    n.a.createElement(
                      'p',
                      null,
                      'Destination Address: ',
                      a.destination.address,
                    ),
                    n.a.createElement(
                      'p',
                      null,
                      'Destination Latitude: ',
                      a.destination.latitude,
                    ),
                    n.a.createElement(
                      'p',
                      null,
                      'Destination Longitude: ',
                      a.destination.longitude,
                    ),
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'Payment Details'),
                    n.a.createElement(
                      'p',
                      null,
                      'Billed Amount: ',
                      a.billedAmount,
                    ),
                    n.a.createElement(
                      'p',
                      null,
                      'Payment Mode: ',
                      a.isCash ? 'Cash Payment' : 'None Cash Payment',
                    ),
                  ),
                ),
                n.a.createElement(
                  'div',
                  { className: 'trip' },
                  n.a.createElement('h1', null, 'Trip Driver Details'),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'Identification Number'),
                    n.a.createElement(
                      'p',
                      null,
                      c.driverID ? c.driverID : 'Data Not Found',
                    ),
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'Personal Details'),
                    n.a.createElement('p', null, 'Name: ', c.name),
                    n.a.createElement('p', null, 'Email: ', c.email),
                    n.a.createElement('p', null, 'Phone: ', c.phone),
                    n.a.createElement('p', null, 'Gender: ', c.gender),
                    n.a.createElement('p', null, 'Company: ', c.agent),
                    n.a.createElement('p', null, 'Address: ', c.address),
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'one-item' },
                    n.a.createElement('h2', null, 'Vehicle Details '),
                    n.a.createElement(
                      'p',
                      null,
                      'Amount Of Vehicle:',
                      ' ',
                      c.vehicleID ? c.vehicleID.length : 'Not Found',
                    ),
                  ),
                ),
              ),
              n.a.createElement(
                'div',
                { className: 'flex' },
                n.a.createElement(
                  'div',
                  { className: 'trip-link' },
                  n.a.createElement(
                    v.b,
                    { to: t },
                    n.a.createElement('button', null, s),
                  ),
                  l
                    ? n.a.createElement(
                        v.b,
                        { to: l },
                        n.a.createElement('button', null, 'Next'),
                      )
                    : n.a.createElement(
                        'button',
                        null,
                        "You've Reached The End",
                      ),
                ),
              ),
            )
          );
        },
        x = t(21);
      var I = function(e) {
        e.trips;
        var a = Object(l.useContext)(F);
        return console.log(a), n.a.createElement('p', null, 'This is Me');
      };
      var C = function() {
          var e = Object(l.useState)({}),
            a = Object(E.a)(e, 2),
            t = a[0],
            r = a[1],
            c = Object(l.useState)([]),
            m = Object(E.a)(c, 2),
            s = m[0],
            i = m[1],
            u = Object(l.useState)([]),
            o = Object(E.a)(u, 2),
            d = o[0],
            p = o[1],
            v = Object(l.useState)([]),
            N = Object(E.a)(v, 2),
            b = N[0],
            y = N[1],
            T = Object(l.useState)([]),
            C = Object(E.a)(T, 2),
            O = C[0],
            w = C[1],
            j = Object(l.useState)([]),
            k = Object(E.a)(j, 2),
            P = k[0],
            A = k[1];
          return (
            Object(l.useEffect)(function() {
              fetch('api/drivers')
                .then(function(e) {
                  return e.json();
                })
                .then(function(e) {
                  A(e.data);
                }),
                fetch('/api/stats')
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    var a = e.data;
                    r(a),
                      i([
                        ['Gender', 'Number of People'],
                        ['Male', a.male],
                        ['Female', a.female],
                      ]),
                      p([
                        ['Trips', 'Number of Trips'],
                        ['Cash', a.noOfCashTrips],
                        ['Non-Cash', a.noOfNonCashTrips],
                      ]),
                      y([
                        ['Billings Type', 'Amount In Naira'],
                        ['Billed Total', a.billedTotal],
                        ['Cash Billed Total', a.cashBilledTotal],
                        ['Non Cash Billed Total', a.nonCashBilledTotal],
                      ]);
                  })
                  .catch(function(e) {
                    return console.log(e);
                  }),
                fetch('api/trips')
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    return w(e.data);
                  });
            }, []),
            n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(
                'div',
                { className: 'detailbar' },
                n.a.createElement(h, null),
                n.a.createElement(f, t),
                O.map(function(e, a, t) {
                  var l = 0 === a ? '/' : t[a - 1].tripID,
                    r = a === t.length - 1 ? void 0 : t[a + 1].tripID;
                  return n.a.createElement(x.a, {
                    key: e.tripID,
                    path: '/'.concat(e.tripID),
                    render: function(a) {
                      return n.a.createElement(D, {
                        trip: e,
                        previous: l,
                        next: r,
                        drivers: P,
                      });
                    },
                  });
                }),
                n.a.createElement(x.a, {
                  exact: !0,
                  path: '/',
                  render: function(e) {
                    return n.a.createElement(g, {
                      trips: O,
                      data: s,
                      billed: b,
                      cash: d,
                      drivers: P,
                    });
                  },
                }),
                n.a.createElement(x.a, {
                  exact: !0,
                  path: '/trips',
                  render: function(e) {
                    return n.a.createElement(I, { trips: O });
                  },
                }),
              ),
            )
          );
        },
        O = t(44),
        w = t.n(O);
      var j = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            v.b,
            { className: 'logo-link', to: '/' },
            n.a.createElement(
              'div',
              { className: 'flex flex-center-cross' },
              n.a.createElement('img', {
                src: w.a,
                className: 'logo',
                alt: 'TechMax',
              }),
              n.a.createElement('h1', { className: 'logo-name' }, 'TechMax'),
            ),
          ),
        );
      };
      var k = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'flex flex-space-evenly admin-logo' },
            n.a.createElement('img', {
              src: p.a,
              className: 'Admin',
              alt: 'Admin',
            }),
            n.a.createElement(
              'div',
              { className: '' },
              n.a.createElement('p', null, 'Welcome,'),
              n.a.createElement('p', null, 'Adedunye Adedayo'),
            ),
          ),
        );
      };
      t(64);
      var P = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'flex left-nav flex-space-evenly' },
            n.a.createElement(T.b, null),
            n.a.createElement(
              'details',
              null,
              n.a.createElement(
                'summary',
                { className: 'overview' },
                ' Overview',
              ),
              ['Gender', 'Trips', 'Billings'].map(function(e) {
                return n.a.createElement('p', { key: e }, e);
              }),
            ),
            n.a.createElement(T.a, null),
          ),
          n.a.createElement(
            'div',
            { className: 'flex left-nav flex-space-evenly' },
            n.a.createElement(N.i, null),
            n.a.createElement(
              'details',
              null,
              n.a.createElement(
                'summary',
                { className: 'overview' },
                ' Tables',
              ),
              ['Trips', 'Drivers', 'Summary'].map(function(e) {
                return n.a.createElement(
                  v.b,
                  { key: e, to: e },
                  n.a.createElement('div', null, e),
                );
              }),
            ),
            n.a.createElement(T.a, null),
          ),
        );
      };
      var A = function() {
          return n.a.createElement(
            'div',
            { className: 'sidebar' },
            n.a.createElement(j, null),
            n.a.createElement(k, null),
            n.a.createElement(P, null),
          );
        },
        B = n.a.createContext({ name: 'Samfeolu', age: 22, company: 'Decagon' })
          .Provider;
      var F = function() {
        return n.a.createElement(
          B,
          null,
          n.a.createElement(
            'div',
            { className: 'flex' },
            n.a.createElement(A, null),
            n.a.createElement(C, null),
          ),
        );
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      );
      m.a({
        dsn: Object({ NODE_ENV: 'production', PUBLIC_URL: '' })
          .REACT_APP_SENTRY_CONFIG_DSN,
        environment: Object({ NODE_ENV: 'production', PUBLIC_URL: '' })
          .REACT_APP_CLIENT_ENVIRONMENT,
      });
      var U = Object(u.a)({ uri: '/graphql' }),
        S = new i.a({ link: U, cache: new o.a() });
      c.a.render(
        n.a.createElement(
          v.a,
          null,
          n.a.createElement(s.a, { client: S }, n.a.createElement(F, null)),
        ),
        document.getElementById('root'),
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[53, 1, 2]],
]);
//# sourceMappingURL=main.e5a3afe4.chunk.js.map
