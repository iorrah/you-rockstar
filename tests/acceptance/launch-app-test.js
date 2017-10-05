import { test } from 'qunit';
import moduleForAcceptance from 'you-rockstar/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | launch app');

test('launch app', function(assert) {
  visit('/');
  click('.navbar a:last-child');
  andThen(() => assert.equal(currentURL(), '/resume/edit'));
});
