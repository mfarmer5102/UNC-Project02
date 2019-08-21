module.exports = function(sequelize, DataTypes) {
  var Patients = sequelize.define("patients", {
    patientId: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"]
      }
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$", "i"]
      }
    },
    ssn: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    primaryPhysicianName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"]
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    emergencyContactName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"]
      }
    },
    emergencyContactNumber: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    }
  });
  return Patients;
};
