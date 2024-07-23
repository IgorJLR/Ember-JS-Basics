import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import ENV from 'super-rentals/config/environment';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a map image for the specified parameters', async function (assert) {
    await render(hbs`<Map
      @lat="37.7797"
      @lng="-122.4184"
      @zoom="10"
      @width="150"
      @height="120"
    />`);
    assert
      .dom('.map img')
      .exists()
      .hasAttribute('alt', 'Map image at coordinates 37.7797,-122.4184')
      .hasAttribute('src')
    let { src } = find('.map img');
    let token = encodeURIComponent(ENV.GEOAPIFY_ACESS_TOKEN);
  });
});
