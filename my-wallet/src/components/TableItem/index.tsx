import * as C from './styles'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { Categories } from '../../data/categories'
type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
   <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
   <C.TableColumn>
     <C.Category color={Categories[item.category].expense ? 'red' : 'green'}>
       {Categories[item.category].expense ? 'Despesa' : 'Receita'}
     </C.Category>
     </C.TableColumn>
   <C.TableColumn>{item.title}</C.TableColumn>
   <C.TableColumn>
     <C.Value color={Categories[item.category].expense ? 'red' : 'green'}>
     R$ {item.value}
     </C.Value>
     </C.TableColumn>
    </C.TableLine>
  );
}