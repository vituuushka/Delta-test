export type Parameter = {
  name: string;
  currentDay: number;
  yesterday: number;
  thisDay: number;
};
export const initParameters: Parameter[] = [
  {
    name: "Выручка, руб",
    currentDay: 500521,
    yesterday: 480521,
    thisDay: 480521,
  },
  {
    name: "Наличные",
    currentDay: 300000,
    yesterday: 300000,
    thisDay: 300000,
  },
  {
    name: "Безналичный расчет",
    currentDay: 100000,
    yesterday: 100000,
    thisDay: 100000,
  },
  {
    name: "Кредитные карты",
    currentDay: 100521,
    yesterday: 100521,
    thisDay: 100521,
  },
  {
    name: "Средний чек, руб",
    currentDay: 1300,
    yesterday: 900,
    thisDay: 900,
  },
  {
    name: "Средний гость, руб",
    currentDay: 1200,
    yesterday: 800,
    thisDay: 800,
  },
  {
    name: "Удаления из чека (после оплаты), руб",
    currentDay: 1000,
    yesterday: 1100,
    thisDay: 900,
  },
  {
    name: "Удаления из чека (до оплаты), руб",
    currentDay: 1300,
    yesterday: 1300,
    thisDay: 900,
  },
  {
    name: "Количество чеков",
    currentDay: 34,
    yesterday: 36,
    thisDay: 34,
  },
  {
    name: "Количество гостей",
    currentDay: 34,
    yesterday: 36,
    thisDay: 32,
  },
];
