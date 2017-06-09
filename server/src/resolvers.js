import { Client, Service, Expense, Calendar } from './connectors';

export const resolvers = {
  Query: {
    clients: (_, args) =>{
      return Client.findAll({where: args, order:[['last','ASC']]});
    },
    services: (_, args) =>{
      return Service.findAll({where: args});
    },
    expenses: (_, args) =>{
      return Expense.findAll({where: args});
    },
    events: (_, args) =>{
      return Calendar.findAll({
        where: args,
        order:[['date', 'ASC']],
        include: [{ model: Client, } ]});
    },
  },
  Mutation: {
    addClient: (root, args) => {
      return Client.create({
        first: args.first,
        last: args.last,
        email: args.email,
        phone: args.phone
      });
    },
    removeClient: (root, args) => {
      Client.destroy({
        where: { id: args.id}
      }).then(deleted => {
        console.log(deleted);
      });
    },
    addService: (root, args) => {
      return Service.create({
        description: args.description,
        rate: args.rate
      });
    },
    removeService: (root, args) => {
      Service.destroy({
        where: { id: args.id}
      }).then(deleted => {
        console.log(deleted);
      });
    },
    addExpense: (root, args) => {
      return Expense.create({
        description: args.description,
        cost: args.cost
      });
    },
    removeExpense: (root, args) => {
      Expense.destroy({
        where: { id: args.id}
      }).then(deleted => {
        console.log(deleted);
      });
    },
    addEvent: (root, args) => {
      return Calendar.create({
        comments: args.comments,
        date: args.date,
      }).then(calendar => {
        calendar.setClient(1);
      });
    },
    removeEvent: (root, args) => {
      Calendar.destroy({
        where: { id: args.id}
      }).then(deleted => {
        console.log(deleted);
      });
    }
  }
};
