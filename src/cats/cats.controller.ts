import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service'; // 引入这个服务基类
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {} // 通过函数依赖注入，私有只读的catsService的实例解析

  @Post()
  async create(@Body() createCatDto: CreateCatDto) { // @body体
    this.catsService.create(createCatDto); // 调用基类的方法
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, 403);
    // return this.catsService.findAll(); // 调用基类的方法
  }
}