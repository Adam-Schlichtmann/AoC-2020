import roundv2 from '../roundv2';
import test from 'ava';

test('roundv2 tests', async t => {
        t.is(roundv2(), 'oracle');
      });