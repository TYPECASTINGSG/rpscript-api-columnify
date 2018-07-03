import {expect} from 'chai';
import m from 'mocha';

import RPSColumnify from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Columnify', () => {

  m.it('shoudl format column', async function () {
    let col = new RPSColumnify;

    let output = await col.columnify(new RpsContext,{},[{
      name: 'module1',
      description: 'some description',
      version: '0.0.1',
    }, {
      name: 'module2',
      description: 'another description',
      version: '0.2.0',
    }]);

    console.log(output);

  }).timeout(0);

})
