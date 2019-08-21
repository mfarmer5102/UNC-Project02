module.exports = function(sequelize, DataTypes) {
  var Snapshots = sequelize.define("snapshots", {
    snapshotId: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true,
      allowNull: false
    },
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
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    weightValue: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    heightValue: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    isDiabetic: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      set: function(value) {
        if (value === "true") value = true;
        if (value === "false") value = false;
        this.setDataValue("hidden", value);
      }
    },
    systolicBloodPressure: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
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
        is: ["^[a-z]+$", "i"]
      }
    }
  });
  return Snapshots;
};
