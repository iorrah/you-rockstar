import { test } from 'qunit';
import moduleForAcceptance from 'you-rockstar/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Exit');

test('visiting /resume/edit', function(assert) {
  visit('/resume/edit');
  click('a#nav-link-exit');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
