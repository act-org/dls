export const defaultData = [
  {
    '2019': 138598,
    '2019scatter': 60000,
    '2020': 130127,
    '2020scatter': 30000,
    '2021': 9250,
    '2021scatter': 40000,
    name: 'California',
  },
  {
    '2019': 57500,
    '2019scatter': 4150,
    '2020': 56500,
    '2020scatter': 5600,
    '2021': 58000,
    '2021scatter': 8000,
    name: 'Nevada',
  },
  {
    '2019': 44800,
    '2019scatter': 7410,
    '2020': 43800,
    '2020scatter': 3250,
    '2021': 45000,
    '2021scatter': 4000,
    name: 'New York',
  },
  {
    '2019': 13000,
    '2019scatter': 900,
    '2020': 15000,
    '2020scatter': 800,
    '2021': 14000,
    '2021scatter': 1900,
    name: 'Texas',
  },
  {
    '2019': 12000,
    '2019scatter': 1600,
    '2020': 15500,
    '2020scatter': 2000,
    '2021': 15000,
    '2021scatter': 750,
    name: 'Washington',
  },
  {
    '2019': 0,
    '2019scatter': 1200,
    '2020': 9800,
    '2020scatter': 1450,
    '2021': 12500,
    '2021scatter': 1600,
    name: 'Oregon',
  },
];

export const defaultDataFourLines = defaultData.map(d => ({ ...d, '2022': 7000, '2022scatter': 3500 }));

export const longLabelData = [
  {
    '2019': 900,
    '2020': 823,
    '2021': 925,
    name: ' Los Angeles - California, United States',
  },
  {
    '2019': 575,
    '2020': 565,
    '2021': 580,
    name: 'Carson City - Nevada, United States',
  },
  {
    '2019': 448,
    '2020': 438,
    '2021': 450,
    name: 'New York - New York, United States',
  },
];

export const longSubLabelData = [
  {
    '2019 with long sublabel': 900,
    '2020 with long sublabel': 823,
    '2021 with long sublabel': 925,
    name: ' California',
  },
  {
    '2019 with long sublabel': 575,
    '2020 with long sublabel': 565,
    '2021 with long sublabel': 580,
    name: ' Nevada',
  },
  {
    '2019 with long sublabel': 448,
    '2020 with long sublabel': 438,
    '2021 with long sublabel': 450,
    name: 'New York',
  },
];

export const defaultBarKeys = ['2019', '2020', '2021'];

export const defaultBarKeysFourLines = [...defaultBarKeys, '2022'];

export const longBarKeys = ['2019 with long sublabel', '2020 with long sublabel', '2021 with long sublabel'];
