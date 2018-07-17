import columnify from 'columnify';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Create text-based columns suitable for console output from objects or arrays of objects.
 * @see {@link https://www.npmjs.com/package/columnify|Columnify}
 * @namespace Columnify
*/
@RpsModule("columnify")
export default class RPSColumnify {

    /**
 * @function columnify
 * @memberof Columnify
 * @example
 * ;Beep once
 * columnify [{name: 'module1',description: 'some description'}, {name: 'module2',description: 'another description'}]
 * @param {Array} data refer to documentation for columnify.
 * @param {*} opts refer to documentation for columnify.
 * @returns {string} 
 * 
 * @see {@link https://www.npmjs.com/package/columnify}
 * 
*/
  @rpsAction({verbName:'columnify'})
  async columnify (ctx:RpsContext,opts:Object, data:any) : Promise<string>{
    return columnify(data,opts);
  }

}
