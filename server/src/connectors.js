import Sequelize from 'sequelize';

// create the connection
const sequelize = new Sequelize('dixon', "root", null, {
  host: 'localhost',
  dialect: 'mysql'
});

//define the models
const ClientModel = sequelize.define('client', {
  first: { type: Sequelize.STRING },
  last: {type: Sequelize.STRING},
  email: {type: Sequelize.STRING},
  phone: {type: Sequelize.STRING}
}, {
  timestamps: false
});

const ServiceModel = sequelize.define('service', {
  description: { type: Sequelize.STRING },
  rate: {type: Sequelize.INTEGER}
}, {
  timestamps: false
});

const ExpenseModel = sequelize.define('expense', {
  description: { type: Sequelize.STRING },
  cost: {type: Sequelize.INTEGER}
}, {
  timestamps: true
});

const CalendarModel = sequelize.define('calendar', {
  comments: { type: Sequelize.STRING },
  date: {type: Sequelize.DATE},
}, {
  timestamps: true
});


const Client = sequelize.models.client;
const Service = sequelize.models.service;
const Expense = sequelize.models.expense;
const Calendar = sequelize.models.calendar;

Client.hasMany(Calendar);
Calendar.belongsTo(Client);

//create the table if it doesn't exist yet
sequelize.sync({force: true}).then(() => {
  Client.bulkCreate([{
    first: 'John',
    last:'Hancock',
    email:'john@gmail.com',
    phone:'(316) 651-1234'
  },
  {
    first: 'Sam',
    last:'Sanders',
    email:'sanders@gmail.com',
    phone:'(940) 651-1234'
  }]);

  Service.bulkCreate([
    { description:'Mowing', rate:10},
    { description: 'Edging', rate:20 }
  ]);

  Expense.bulkCreate([
    { description:'Gas', cost:18},
    { description: 'Edger Cord', cost:10 }
  ]);

  Calendar.create({
      comments: 'Yard Service',
      date:new Date(),
  }).then(calendar => {
    calendar.setClient(1);
  });

  Calendar.create({
      comments: 'Yard Service',
      date:new Date("June 13, 2017 11:13:00"),
  }).then(calendar => {
    calendar.setClient(2);
  });

  Calendar.create({
      comments: 'Yard Service',
      date:new Date("July 23, 2017 12:30:00"),
  }).then(calendar => {
    calendar.setClient(1);
  });

});

export { Client, Service, Expense, Calendar };
