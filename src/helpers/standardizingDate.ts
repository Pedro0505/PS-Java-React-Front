import dayjs from 'dayjs';

const standardizingDate = (date: string) => {
  const dataFormatada = dayjs(date).format('YYYY/MM/DD');

  return dataFormatada;
};

export default standardizingDate;
