module.exports = function(sequelize, DataTypes) {
  var Patients = sequelize.define("Patients", {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false
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
      allowNull: true
    },
    primaryPhysicianName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    emergencyContactName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emergencyContactNumber: {
      type: DataTypes.STRING
    }
  });
  return Patients;
};
