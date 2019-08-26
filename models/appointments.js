module.exports = function(sequelize, DataTypes) {
  var Appointments = sequelize.define("Appointments", {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    physicianName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    appointmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    appointmentTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    appointmentCancelled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING,
      isAlphsnumeric: true
    }
  });
  return Appointments;
};
