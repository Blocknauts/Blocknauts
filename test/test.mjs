import { assert } from 'chai';
import { getPreferences } from '../src/index.js';
import { preferences } from '../src/utils/example.js';

describe('Preferences', function() {
    it('should return the correct JSON', async function() {
        let returnedPrefs = await getPreferences();
        assert.equal(returnedPrefs, preferences);
    });
});
