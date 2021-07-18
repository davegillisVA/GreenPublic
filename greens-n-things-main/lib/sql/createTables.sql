
-- Create customers table.
CREATE TABLE IF NOT EXISTS customers (
    customerID INT NOT NULL UNIQUE AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    adminID INT NOT NULL UNIQUE,
    PRIMARY KEY(customerID)
);

-- Create products table.
CREATE TABLE IF NOT EXISTS products (
    productID INT NOT NULL UNIQUE AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    thumbnail VARCHAR(255),
    cost DECIMAL(64, 2) DEFAULT 0.00,
    qtyAvailable INT DEFAULT 0,
    PRIMARY KEY(productID)
);

