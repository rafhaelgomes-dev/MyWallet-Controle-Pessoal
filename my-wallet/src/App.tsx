import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { Categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import * as C from './App.styles';
import { InfoArea } from './components/infoArea'

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
      <C.HeaderText>Olá Usuario X</C.HeaderText>
      <C.HeaderSubText>Bem Vindo ao MyWallet: Controle de desespesas pessoais! </C.HeaderSubText>
    </C.Header>
    <C.Body>
     {/* Área de informações*/}
        <InfoArea currentMonth={ currentMonth }/>
      
    {/* Área de inserir informações*/}


    {/* Área de tabela de itens*/}
     <TableArea list={ filteredList }/>

    </C.Body>
  </C.Container>
  )
}

export default App;