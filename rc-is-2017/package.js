Package.describe({
  name: 'rc-is-2017',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use([
    'ecmascript',
		'rocketchat:lib',
	]);
  api.mainModule('rc-is-2017.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rc-is-2017');
  api.mainModule('rc-is-2017-tests.js');
});
