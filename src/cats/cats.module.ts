import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global() // 设置为全局模块
@Module({ // 二级的控制器、提供者都由二级模块添加
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService] // 设置为共享模块
})
export class CatsModule {
  constructor(private readonly catsService: CatsService) {} // 导入了之后就可以使用提供者
}
