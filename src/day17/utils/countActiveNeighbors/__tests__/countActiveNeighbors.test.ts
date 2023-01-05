import countActiveNeighbors from '../countActiveNeighbors';
import test from 'ava';

test('countActiveNeighbors tests', async t => {
        t.is(countActiveNeighbors(), 'oracle');
      });