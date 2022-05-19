import {Context} from 'koishi';

export const name='shutdown';

export function apply(ctx:Context){
    ctx.command('shutdown','关闭机器人',{authority:4})
        .option('reboot','-r 重启机器人')
        .action(async ({session,options})=>{
            if(options?.reboot){
                await session?.send('正在重启中……');
                await ctx.app?.stop();
                await ctx.app?.start();
                await session?.send('重启成功！')
            }
            else{
                await session?.send('关闭中……')
                await ctx.app?.stop();
            }
        })
}