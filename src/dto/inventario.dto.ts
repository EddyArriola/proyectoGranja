import{isNumber, isString, min} from 'class-validator'

export class dtoInventario{
    InventarioID: number
    FechaIngreso: string
    FechaVenta: string
    CantidadIngreso: number
    CantidadVenta: number
	Existencias: number
}

export class updateDto{
    FechaIngreso?: string
    FechaVenta?: string
    CantidadIngreso?: number
    CantidadVenta?: number
	Existencias?: number
}