"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const produccion_huevos_module_1 = require("./produccion-huevos/produccion-huevos.module");
const produccion_huevo_entity_1 = require("./produccion-huevos/entities/produccion-huevo.entity");
const inventario_controller_1 = require("./inventario-huevos/inventario.controller");
const inventario_service_1 = require("./inventario-huevos/inventario.service");
const prisma_module_1 = require("./prisma/prisma.module");
const inventario_huevos_module_1 = require("./inventario-huevos/inventario-huevos.module");
const clientes_controller_1 = require("./clientes/clientes.controller");
const clientes_service_1 = require("./clientes/clientes.service");
const clientes_module_1 = require("./clientes/clientes.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.prismaModule,
            inventario_huevos_module_1.InventarioHuevosModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: 'LAPTOP-UE9FR5EG',
                port: 1433,
                username: 'sa',
                password: '1vacasincola',
                database: 'GranjaAvicolaDB',
                entities: [produccion_huevo_entity_1.ProduccionHuevo],
                logging: false,
                synchronize: false,
                options: {
                    encrypt: false,
                    trustServerCertificate: false,
                },
            }),
            produccion_huevos_module_1.ProduccionHuevosModule,
            clientes_module_1.ClientesModule,
        ],
        controllers: [inventario_controller_1.InventarioController, clientes_controller_1.ClientesController],
        providers: [inventario_service_1.InventarioService, clientes_service_1.ClienteService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map