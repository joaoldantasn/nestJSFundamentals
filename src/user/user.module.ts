import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserIdCheckMiddleware } from 'src/middlewares/user-id-check.middleware';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

//recebe metadados
@Module({
  imports: [PrismaModule], //informacoes que quer importar(geralmente modules)
  controllers: [UserController],
  providers: [UserService], // classes que vao prover um serviço( tem injectable)
  exports: [], //recursos que tem no module que deseja importar
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserIdCheckMiddleware).forRoutes({
      path: 'users/:id',
      method: RequestMethod.ALL,
    });
  }
}
