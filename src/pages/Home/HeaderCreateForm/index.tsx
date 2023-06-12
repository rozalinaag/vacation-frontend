import Divider from "@mui/material/Divider";
// @ts-ignore
import styles from "./styles.module.scss";
import 'dayjs/locale/ru';
// @ts-ignore
import group from './img/group.svg';
import TeamPrint from "./TeamPrint";
import Form from './Form'
import {useAppSelector} from "../../../redux/store";
import MyNextVacation from "./MyNextVacation";

function HeaderCreateForm() {

  const year: string = useAppSelector(state => state.vacation.selectedYear)

  return (
    <div>
      <Divider className={styles.divider}>График отпусков {year}</Divider>
      <div className={styles.wrapper}>
        <Form/>
        <MyNextVacation/>
      </div>
      <Divider className={styles.divider2}></Divider>
      <TeamPrint/>
    </div>
  );
}

export default HeaderCreateForm;