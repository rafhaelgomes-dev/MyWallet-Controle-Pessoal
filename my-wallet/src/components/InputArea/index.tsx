import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react';
import { newDateAdjusted } from '../../helpers/dateFilter';
type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd } : Props) => {

  const [data, setData] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(data).getTime())) {
      errors.push('Data inválida!');
    }
    if(!category.includes(category)) {
      errors.push('Categoria inválida!');
    }
    if(title === '') {
      errors.push('Título vazio!');
    }
    if(value <= 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(data),
        category: category,
        title: title,
        value: value
      });
      clearUseState();
  }
}

  const clearUseState = () => {
    setData('');
    setCategory('');
    setTitle('');
    setValue(0);
  } 

  return (
    <C.Container>
        <C.InputLabel>
          <C.InputTitle>Data</C.InputTitle>
          <C.Input type="date" value={data} onChange={e => setData(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Tipo</C.InputTitle>
          <C.Select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="" disabled selected>- Selecione -</option>
          <option value="food">Despesa</option>
          <option value="salary">Receita</option>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Título</C.InputTitle>
          <C.Input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input type="number" value={value} onChange={e => setValue(parseFloat(e.target.value))} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.InputLabel>
      </C.Container>
  )
 }