import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join, resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  const projectPath = resolve('./apps/nest-webpack-test/src/');

  app.useStaticAssets(join(projectPath, 'public'));
  app.setBaseViewsDir(join(projectPath, 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
