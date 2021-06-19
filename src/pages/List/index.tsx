import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  const months = [
    {
      value: 9,
      label: 'Setembro',
    },
    {
      value: 8,
      label: 'Agosto',
    },
    {
      value: 7,
      label: 'Julho',
    },
  ];

  const years = [
    {
      value: 2021,
      label: 2021,
    },
    {
      value: 2020,
      label: 2020,
    },
    {
      value: 2019,
      label: 2019,
    },
  ];

  return (
    <Container>
      <ContentHeader title='Saídas' lineColor='#e44c4e'>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button type='button' className='tag-filter tag-filter-recurrent'>
          Recorrentes
        </button>
        <button type='button' className='tag-filter tag-filter-eventual'>
          Eventuais
        </button>
      </Filters>
      <Content>
        <HistoryFinanceCard
          tagColor='#e44c4e'
          title='Conta de Luz'
          subTitle='19/06/2021'
          amount='R$ 130,00'
        />
      </Content>
    </Container>
  );
};

export default List;
