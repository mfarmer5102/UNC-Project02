module.exports = function(sequelize, DataTypes) {
  var Snapshots = sequelize.define("Snapshots", {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    physicianId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    snapshotDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    pulse: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    temperature: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true
      }
    },
    weightValue: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true
      }
    },
    heightValue: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true
      }
    },
    isDiabetic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    systolicBloodPressure: {
      type: DataTypes.INTEGER
    },
    diastolicBloodPressure: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    comments: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    }
  });
  return Snapshots;
};
