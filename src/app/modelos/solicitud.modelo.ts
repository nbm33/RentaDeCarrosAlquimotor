export class ModeloSolicitud{
    id?:string;
    FechaRecogida?:string;
    FechaEntrega?:string;
    Estado?:[string];
    FechaSolicitud?:string;
    ValorTotal?:number;
    clienteId?: string;
    puntoAlquilerId?: string;
    vehiculosId?: string;
    vehiculosTipo?: string;
}