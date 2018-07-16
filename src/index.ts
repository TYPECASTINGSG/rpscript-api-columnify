import columnify from 'columnify';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Columnify Module
 * @namespace Columnify 
*/
@RpsModule("columnify")
export default class RPSColumnify {

  @rpsAction({verbName:'columnify'})
  async columnify (ctx:RpsContext,opts:Object, data:any) : Promise<string>{
    return columnify(data,opts);
  }

}
