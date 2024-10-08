BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Cliente] (
    [ClienteID] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(1000) NOT NULL,
    [Direccion] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Cliente_pkey] PRIMARY KEY CLUSTERED ([ClienteID])
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
