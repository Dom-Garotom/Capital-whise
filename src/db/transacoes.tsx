import { v4 as uuidv4 } from 'uuid';

export const transactionsData = [
  {
    id: uuidv4(),
    userId: "user1",
    tipoDeposito: "Deposito",
    data: "2024-10-20",
    hour: "10:30",
    value: 500,
  },
  {
    id: uuidv4(),
    userId: "user2",
    tipoDeposito: "Saque",
    data: "2024-10-21",
    hour: "14:45",
    value: 200,
  },
  {
    id: uuidv4(),
    userId: "user1",
    tipoDeposito: "Transferência",
    data: "2024-10-22",
    hour: "09:15",
    value: 350,
  },
  {
    id: uuidv4(),
    userId: "user3",
    tipoDeposito: "Deposito",
    data: "2024-10-23",
    hour: "16:00",
    value: 1000,
  },
  {
    id: uuidv4(),
    userId: "user2",
    tipoDeposito: "Saque",
    data: "2024-10-24",
    hour: "18:20",
    value: 150,
  },
  {
    id: uuidv4(),
    userId: "user1",
    tipoDeposito: "Transferência",
    data: "2024-10-25",
    hour: "11:10",
    value: 420,
  },
];
