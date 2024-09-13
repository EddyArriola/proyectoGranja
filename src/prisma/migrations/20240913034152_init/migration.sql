-- CreateTable
CREATE TABLE `Granjas` (
    `GranjaID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`GranjaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Galeras` (
    `GaleraID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `capacidad` INTEGER NOT NULL,
    `GranjaID` INTEGER NOT NULL,

    PRIMARY KEY (`GaleraID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gallinas` (
    `GallinaID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `GaleraID` INTEGER NOT NULL,
    `fechaNacimiento` DATETIME(3) NOT NULL,
    `fechaLlegada` DATETIME(3) NOT NULL,

    PRIMARY KEY (`GallinaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InventarioHuevos` (
    `InventarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaIngreso` DATETIME(3) NOT NULL,
    `fechaVenta` DATETIME(3) NULL,
    `cantidadIngreso` INTEGER NOT NULL,
    `cantidadVenta` INTEGER NULL,
    `existencias` INTEGER NOT NULL,

    PRIMARY KEY (`InventarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HuevosProduccion` (
    `ProduccionID` INTEGER NOT NULL AUTO_INCREMENT,
    `GallinaID` INTEGER NOT NULL,
    `fechaProduccion` DATETIME(3) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `InventarioID` INTEGER NOT NULL,

    PRIMARY KEY (`ProduccionID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VentasHuevos` (
    `VentaID` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaVenta` DATETIME(3) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precioVenta` DECIMAL(10, 2) NOT NULL,
    `InventarioID` INTEGER NOT NULL,

    PRIMARY KEY (`VentaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clientes` (
    `ClienteID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ClienteID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VentasClientes` (
    `VentaClienteID` INTEGER NOT NULL AUTO_INCREMENT,
    `VentaID` INTEGER NOT NULL,
    `ClienteID` INTEGER NOT NULL,

    PRIMARY KEY (`VentaClienteID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Galeras` ADD CONSTRAINT `Galeras_GranjaID_fkey` FOREIGN KEY (`GranjaID`) REFERENCES `Granjas`(`GranjaID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gallinas` ADD CONSTRAINT `Gallinas_GaleraID_fkey` FOREIGN KEY (`GaleraID`) REFERENCES `Galeras`(`GaleraID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HuevosProduccion` ADD CONSTRAINT `HuevosProduccion_GallinaID_fkey` FOREIGN KEY (`GallinaID`) REFERENCES `Gallinas`(`GallinaID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HuevosProduccion` ADD CONSTRAINT `HuevosProduccion_InventarioID_fkey` FOREIGN KEY (`InventarioID`) REFERENCES `InventarioHuevos`(`InventarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VentasHuevos` ADD CONSTRAINT `VentasHuevos_InventarioID_fkey` FOREIGN KEY (`InventarioID`) REFERENCES `InventarioHuevos`(`InventarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VentasClientes` ADD CONSTRAINT `VentasClientes_VentaID_fkey` FOREIGN KEY (`VentaID`) REFERENCES `VentasHuevos`(`VentaID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VentasClientes` ADD CONSTRAINT `VentasClientes_ClienteID_fkey` FOREIGN KEY (`ClienteID`) REFERENCES `Clientes`(`ClienteID`) ON DELETE RESTRICT ON UPDATE CASCADE;
