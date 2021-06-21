import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from 'recharts';

import { useTheme } from '../../hooks/theme';

import formatCurrency from '../../utils/formatCurrency';

import {
  Container,
  ChartContainer,
  Header,
  LegendContainer,
  Legend,
} from './styles';

interface IHistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}) => {
  const { theme } = useTheme();
  return (
    <Container>
      <Header>
        <h2>Histórico de saldo</h2>
        <LegendContainer>
          <Legend color={lineColorAmountEntry}>
            <div></div>
            <span>Entradas</span>
          </Legend>
          <Legend color={lineColorAmountOutput}>
            <div></div>
            <span>Saídas</span>
          </Legend>
        </LegendContainer>
      </Header>
      <ChartContainer>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey='month'
              stroke={theme.colors.white}
              axisLine={false}
            />
            <Tooltip formatter={formatCurrency} />
            <Line
              type='monotone'
              dataKey='amountEntry'
              name='Entradas'
              stroke={lineColorAmountEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type='monotone'
              dataKey='amountOutput'
              name='Saídas'
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};

export default HistoryBox;
