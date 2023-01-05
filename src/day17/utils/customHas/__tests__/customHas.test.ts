import customHas from '../customHas';
import test from 'ava';

test('customHas tests', async t => {
        t.is(customHas(), 'oracle');
      });