import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember cli spinner', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    assert.expect(2);
    
    await render(hbs`{{ember-cli-spinner}}`);
    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#ember-cli-spinner isShow=true}}
        template block text
      {{/ember-cli-spinner}}
    `);
    debugger;
    assert.dom('*').hasText('template block text');
  });
});
