import {Context} from 'koishi';

export const name='shutdown';

export function apply(ctx:Context){
    ctx.command('shutdown','关闭机器人',{authority:4})
        .option('reboot','-r 重启机器人')
        .action(async ({options})=>{
            if(options?.reboot){
                await ctx.app?.stop();
                await ctx.app?.start();
            }
            else{
                await ctx.app?.stop();
            }
        })
}