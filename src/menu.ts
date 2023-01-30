import { ArgumentParser } from 'argparse';
import { clickjacking } from './payloads';

export class MenuPrograma{

    public static argumentos():void{
        console.log(this.banner())
        const parser = new ArgumentParser({
            description: "Clickjackingmap",
            add_help: true
          });
        parser.add_argument('-u', '--url', { help: 'Insert url',type:'str', action: "store", dest:"url", required: true });
        parser.add_argument('-p','--payload',{help: 'Insert Payload',type:'str',action:"store",choices:["clickbasic","clickmulti"],dest:"payload",required: true})
        let args = parser.parse_args();
        
        if(args.url && args.payload == "clickbasic"){
            clickjacking.clickJackingBasic(args.url);
        }else if(args.url && args.payload == "clickmulti"){
            clickjacking.multiStepClickJacking(args.url);
        }else{
            console.dir(parser.parse_args());
        }
    }

    public static banner() : string{
        return `
               __ __        __     __              __     __                                   
        .----.|  |__|.----.|  |--.|__|.---.-.----.|  |--.|__|.-----.-----.--------.---.-.-----.
        |  __||  |  ||  __||    < |  ||  _  |  __||    < |  ||     |  _  |        |  _  |  _  |
        |____||__|__||____||__|__||  ||___._|____||__|__||__||__|__|___  |__|__|__|___._|   __|
                                 |___|                             |_____|              |__|
                                                                            Autor: joaovictorti
                                                                            version: 1.1   
        `
        
    }
}