import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { Categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import * as C from './App.styles';

const App = () => {
const [list, setList] = useState(items);
const [filteredList, setFilteredLsit] = useState<Item[]>([]);
const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=> {
    setFilteredLsit(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]) 

  return (
  <C.Container>
    <C.Header>
      <C.HeaderText>Meu controle de despesas</C.HeaderText>
    </C.Header>
    <C.Body>
     {/* Área de informações*/}

      
    {/* Área de inserir informações*/}


    {/* Área de tabela de itens*/}
     <TableArea list={ filteredList }/>

    </C.Body>
  </C.Container>
  )
}

export default App;