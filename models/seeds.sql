
CREATE TABLE patients
(
    patientId INT(10)
    AUTO_INCREMENT NOT NULL,
    firstName VARCHAR
    (255) NOT NULL,
    lastName VARCHAR
    (255) NOT NULL,
    birthDate DATE,
    gender VARCHAR
    (100),
    ssn INT
    (10),
    photoURL
    NVARCHAR
    (500),
    primaryPhysicianName VARCHAR
    (255) NOT NULL,
    phoneNumber INT
    (10),
    email VARCHAR
    (320),
    emergencyContactName VARCHAR
    (255) NOT NULL,
    emergencyContactNumber INT
    (10) NOT NULL,
    PRIMARY KEY
    (patientId);
);

    DROP TABLE IF EXISTS snapshots;

    CREATE TABLE snapshots
    (
        snapshotsId INT(10)
        AUTO_INCREMENT NOT NULL,
    patientId INT
        (10) AUTO_INCREMENT NOT NULL,
    physicianId INT
        (10) AUTO_INCREMENT NOT NULL,
    snapshotDate DATE,
    pulse INT
        (10),
    temperature DECIMAL
        (65, 30),
    weightValue DECIMAL
        (65, 30),
    heightValue DECIMAL
        (65, 30),
    isDiabetic BOOLEAN DEFAULT false,
    systolicBloodPressure INT
        (10),
    diastolicBloodPressure INT
        (10),
    comments VARCHAR
        (255),
);

