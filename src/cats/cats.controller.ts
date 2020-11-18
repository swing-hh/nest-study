import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Param, HttpStatus} from '@nestjs/common';
import { Request, Response } from 'express';
import { get } from 'http';

@Controller('cats')
export class CatsController {
  @Get(':id')
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  // @Redirect('https://nestjs.com', 301)
  async Get (@Param('id') id): Promise<any[]> {
    const p = new Promise(
      function (resolve, reject) {
        setTimeout(()=>{
          // 一段耗时的异步操作
          resolve('成功') // 数据处理完成
          // reject('失败')
        }, 5000)
         // 数据处理出错
      }
    )
    const a = await p.then();
    console.log(a)
    return [a];
  }

  @Post('name')
  Post (): string {
    return 'post name'
  }
}
