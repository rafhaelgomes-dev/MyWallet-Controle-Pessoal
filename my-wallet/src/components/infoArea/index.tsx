import * as C from './styles';
import {formatCurrentMonth} from '../../helpers/dateFilter'
 
type Props = {
  currentMonth: string;
}

export const InfoArea = ({currentMonth}: Props) => {
  return(
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow>←</C.MonthArrow>
        <C.MonthArrow>{formatCurrentMonth(currentMonth)}</C.MonthArrow>
        <C.MonthArrow>→</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>

      </C.ResumeArea>
    </C.Container>
  );
}