import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { InventarioService } from './inventario/inventario.service';
import { throwDeprecation } from 'process';
import { get } from 'http';
import { inventarios } from './inventario.modelos';

@Controller('inventario')
export class InventarioController {
    constructor(private inventarioService: InventarioService){

    }
    
    @Get()
    get(){
        return this.inventarioService.findAll().then(res =>{
            return{success: true, data: res}
        }).catch(error=>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post()
    save(@Body() inventario: inventarios){
        return this.inventarioService.create(inventario).then(res =>{
            return{success: true, data: res}
        }).catch(error=>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Post('/update')
    update(@Body() inventario: inventarios){
        return this.inventarioService.update(inventario).then(res =>{
            return{success: true, data: res}
        }).catch(error=>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

    @Get('/delete/:id')
    delete(@Param('id')id){
        return this.inventarioService.delete(id).then(res =>{
            return{success: true, data: res}
        }).catch(error=>{
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        });
    }

}
