import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1'); // establecer un prefijo global a toda la app rest.
  await app.listen(3000);
}
bootstrap();
