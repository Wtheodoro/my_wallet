import React, {useMemo} from 'react';
import ContentHeader from '../../components/contentSet/ContentHeader';
import HistoryFinanceTrack from '../../components/contentSet/HistoryFinanceTrack';
import SelectInput from '../../components/contentSet/SelectInput';
import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match: {
    params: {
      type: string
    }
  }
}

const List: React.FC<IRouteParams> = ({ match }) => {

  const { type } = match.params

  const typeFromUrl = useMemo(() => {
    return type === 'entry-balance' ?
      {
        title: 'Incomes',
        lineColor: '#f7931B'
      } 
    : 
      {
        title: 'Expenses',
        lineColor: '#E44C4E'
      }
  }, [type])

  const months = [
    {
      value: 7,
      label: 'July'
    },
    {
      value: 8,
      label: 'August'
    },
    {
      value: 9,
      label: 'September'
    },
  ]

  const years = [
    {
      value: 2021,
      label: 2021
    },
    {
      value: 2020,
      label: 2020
    },
    {
      value: 2019,
      label: 2019
    },
    {
      value: 2018,
      label: 2018
    },
  ]

  return (
    <Container>
      <ContentHeader title={typeFromUrl.title} lineColor={typeFromUrl.lineColor}>
        <SelectInput options={months}/>
        <SelectInput options={years}/>
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">Recurrents</button>
        <button type="button" className="tag-filter tag-filter-eventual">Eventual</button>
      </Filters>

      <Content>
        <HistoryFinanceTrack 
          amount='14,350.00'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        
      </Content>
    </Container>
  )
}

export default List;