

export class DtoClientes{
    ClienteID: number
    Nombre: string
    Direccion: string
    Apellidos: string
	Email: string
	Telefono: number
}

export class UpdateDto{
    Nombre?: string
    Direccion?: string
    Apellidos?: string
	Email?: string
	Telefono?: number
  }