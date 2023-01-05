import getBounds from '../getBounds';
import test from 'ava';

test('getBounds tests', async t => {
        t.is(getBounds(), 'oracle');
      });