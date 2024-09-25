BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[inventario] (
    [InventarioID] INT NOT NULL IDENTITY(1,1),
    [FechaIngreso] NVARCHAR(1000) NOT NULL,
    [FechaVenta] NVARCHAR(1000) NOT NULL,
    [CantidadIngreso] INT NOT NULL,
    [CantidadVenta] INT NOT NULL,
    [Existencias] INT NOT NULL,
    CONSTRAINT [inventario_pkey] PRIMARY KEY CLUSTERED ([InventarioID])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
