import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { items } from './data/items';
import { Categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import * as C from './App.styles';
import { InfoArea } from './components/infoArea'
import { InputArea } from './components/InputArea';

const App = () => {
const [list, setList] = useState(items);
const [filteredList, setFilteredLsit] = useState<Item[]>([]);
const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
const [income, setIncome] = useState(0)
const [expense, setExpense] = useState(0)

  useEffect(()=> {
    setFilteredLsit(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]) 

  useEffect(()=> {
    let incomeCount = 0;
    let expnseCount = 0;
    for(let i in filteredList ) {
      if(Categories[filteredList[i].category].expense) {
        expnseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount);
    setExpense(expnseCount);
  }, [filteredList]) 

  const handleMonthChange = (newMonth: string) => {
   setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
  <C.Container>
    <C.Header>
      <C.HeaderText>Olá Usuario X</C.HeaderText>
      <C.HeaderSubText>Bem Vindo ao MyWallet: Controle de desespesas pessoais! </C.HeaderSubText>
    </C.Header>
    <C.Body>
     {/* Área de informações*/}
        <InfoArea 
        currentMonth={ currentMonth }
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />
      
    {/* Área de inserir informações*/}
       <InputArea onAdd={handleAddItem} />

    {/* Área de tabela de itens*/}
     <TableArea list={ filteredList }/>

    </C.Body>
  </C.Container>
  )
}

export default App;