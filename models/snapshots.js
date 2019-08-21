module.exports = function(sequelize, DataTypes) {
  var Snapshots = sequelize.define("snapshots", {
    snapshotId: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true,
      notNull: true
    },
    patientId: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        notNull: true
      }
    },
    physicianId: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
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
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    weight: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    height: {
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
    },
    comments: {
        type: DataTypes.STRING,
        validate: {
          is: ["^[a-z]+$",'i']
        } 
    }
  });
  return Snapsots;
};
