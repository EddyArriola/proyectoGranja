import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return{
            type:'mssql',
            host:'LAPTOP-UE9FR5EG',
            username:'sa',
            password:'1vacasincola',
            port:1433,
            database:'GranjaAvicolaDB',
            entities: ['dis//**/*.model.{ts.js}'],
            options: {
                encrypt: true,  // Habilitar encriptación SSL/TLS
                trustServerCertificate: true,  // Permitir certificados autofirmados
              },
        }
    }
}
