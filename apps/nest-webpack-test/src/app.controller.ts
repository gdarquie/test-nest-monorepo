import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLibraryService } from '@app/my-library';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly myLibraryService: MyLibraryService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('lib')
  getHelloFromLibrary(): string {
    return this.myLibraryService.getContentFromMyLibrary();
  }

  @Get('hbs')
  @Render('index')
  getView() {
    return { message: 'Hello world!' };
  }
}
