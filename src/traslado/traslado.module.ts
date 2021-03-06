import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Traslado } from './entities/traslado.entity';
import { TrasladoService } from './traslado.service';
import { TrasladoController } from './traslado.controller';
import { PersonalModule } from 'src/personal/personal.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Traslado
        ]),
        PersonalModule,
        //PersonalFuncionModule
    ],
    providers: [TrasladoService],
    controllers: [TrasladoController],
    exports: [TrasladoService]
})
export class TrasladoModule {}
