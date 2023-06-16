import React, {useEffect} from "react";
// @ts-ignore
import styles from './styles.module.scss';
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, fetchTags} from "../../redux/slices/vacation";
import TimeLine from "./TimeLine";
import Months from "./Months";
import {UserInfo} from "../../components";
import {Navigate} from "react-router-dom";
// @ts-ignore
import photo from './img/myphoto.jpg'
import {selectIsAuth} from "../../redux/slices/auth";
import HeaderCreateForm from "./HeaderCreateForm";
import {useAppSelector} from "../../redux/store";

export const Home = () => {
  const dispatch: any = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const selectedNewDates = useAppSelector((state) => state.vacation.selectedNewDate);
  // @ts-ignore

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch])

  // @ts-ignore
  return (
    <div className={styles.wrapper}>
      {!isAuth && (
        <Navigate to="/login" replace={true}/>
      )}
      <HeaderCreateForm/>
      <div className={styles.table}>
        <div className={styles.tableLine}>
          <div className={styles.months}>
            <Months/>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.person}>
                <UserInfo avatarUrl={"https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg?w=900&t=st=1685548525~exp=1685549125~hmac=ac13b9d4a61fc4ae30ceaeeca07810f52334b277e8f0a991a834fa6a777cbfca"}
                          fullName={"Кирилл И."} additionalText={"26/2"}
                           position={"разработчик"} />
              </div>
              <TimeLine reserved={[{weekNumber: 1, vacationDays: 2},
                  {weekNumber: 14, vacationDays: 3},
                  {weekNumber: 15, vacationDays: 7},
                  {weekNumber: 50, vacationDays: 7},
                  {weekNumber: 51, vacationDays: 7}]} idPerson={"w"}/>
            </div>
            <div className={styles.card}>
              <div className={styles.person}>
                <UserInfo
                  avatarUrl={"https://icdn.lenta.ru/images/2021/11/10/13/20211110130606121/detail_d6b057076e2a8350397b88e71a70b514.jpg"}
                  fullName={"Антон Л."} additionalText={"19/9"}
                  position={"разработчик"}/>
              </div>
              <TimeLine reserved={[{weekNumber: 3, vacationDays: 2},
                  {weekNumber: 4, vacationDays: 3},
                  {weekNumber: 30, vacationDays: 7},
                  {weekNumber: 31, vacationDays: 7}]} idPerson={"k"}/>
            </div>
            <div className={styles.card}>
              <div className={styles.person}>
                <UserInfo
                  avatarUrl={"https://www.e-xecutive.ru/uploads/article/image/1990772/thumb_Irina_Travkina_executive_ru.jpg"}
                  fullName={"Маша К."} additionalText={"28/0"}
                  position={"аналитик"}/>
              </div>
              <TimeLine reserved={[{weekNumber: 12, vacationDays: 7},
                  {weekNumber: 13, vacationDays: 7},
                  {weekNumber: 41, vacationDays: 7},
                  {weekNumber: 38, vacationDays: 2},
                  {weekNumber: 45, vacationDays: 5}]} idPerson={"l"}/>
            </div>
            <div className={styles.card}>
              <div className={styles.person}>
                <UserInfo
                  avatarUrl={"https://img.freepik.com/free-photo/close-up-portrait-of-handsome-man-smiling_176420-3855.jpg?w=360&t=st=1685548565~exp=1685549165~hmac=89b42ae7df96b05b7de5406a8a4dd48ce08457f72642cb23f16090d4706e3eda"}
                  fullName={"Двитрий Р."} additionalText={"28/0"}
                  position={"аналитик"}/>
              </div>
              <TimeLine reserved={[{weekNumber: 18, vacationDays: 5},
                  {weekNumber: 25, vacationDays: 3},
                  {weekNumber: 41, vacationDays: 7},
                  {weekNumber: 42, vacationDays: 7},
                  {weekNumber: 51, vacationDays: 6}]} idPerson={"d"}/>
            </div>
            <div className={styles.card}>
              <div className={styles.person}>
                <UserInfo
                  avatarUrl={"https://metaratings.ru/_images/insecure/w-680:h-512/bG9jYWw6Ly8vaW1hZ2VzL2QxL2I4L2QxYjgzOTYxMjcyOGNlM2Y4YzQyMDg3Y2Y2YTU2M2NkLmpwZw==.webp"}
                  fullName={"Людмила К."} additionalText={"24/4"}
                  position={"дизайнер"}/>
              </div>
              <TimeLine reserved={[
                {weekNumber: 14, vacationDays: 5},
                  {weekNumber: 15, vacationDays: 1},
                  {weekNumber: 30, vacationDays: 7},
                  {weekNumber: 31, vacationDays: 7},
                  {weekNumber: 49, vacationDays: 4}]} idPerson={"r"}/>
            </div>
            <div className={styles.card}>
              <div className={styles.person}>
                <UserInfo avatarUrl={photo}
                          fullName={"Розалина А."} additionalText={"28/0"}
                          position={"разработчик"}/>
              </div>
              <TimeLine reserved={[{weekNumber: 8, vacationDays: 7},
                  {weekNumber: 37, vacationDays: 7},
                  {weekNumber: 38, vacationDays: 7},
                  {weekNumber: 50, vacationDays: 7}]} idPerson={"m"} selectedNewDates = {selectedNewDates}/>
            </div>
          </div>
        </div>
      </div>
      <Divider className={styles.divider}/>
      {/*<Grid container spacing={4}>*/}
      {/*    <Grid xs={8} item>*/}
      {/*        {(isPostsLoading ? [...Array(5)] : posts.items).map((obj: any, index: number) => (*/}
      {/*            isPostsLoading ?*/}
      {/*                (*/}
      {/*                    <Post key={index} isLoading={true}/>*/}
      {/*                ) :*/}
      {/*                <Post*/}
      {/*                    key={obj._id}*/}
      {/*                    _id={obj._id}*/}
      {/*                    title={obj.title}*/}
      {/*                    imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"*/}
      {/*                    user={obj.user}*/}
      {/*                    createdAt={obj.createdAt}*/}
      {/*                    viewsCount={obj.viewsCount}*/}
      {/*                    commentsCount={3}*/}
      {/*                    tags={obj.tags}*/}
      {/*                    isEditable*/}
      {/*                />*/}
      {/*        ))}*/}
      {/*    </Grid>*/}
      {/*    <Grid xs={4} item>*/}
      {/*        <TagsBlock items={tags.items} isLoading={isTagsLocading}/>*/}
      {/*        <CommentsBlock*/}
      {/*            items={[*/}
      {/*                {*/}
      {/*                    user: {*/}
      {/*                        fullName: 'Вася Пупкин',*/}
      {/*                        avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',*/}
      {/*                    },*/}
      {/*                }*/}
      {/*            ]}*/}
      {/*            isLoading={false}*/}
      {/*        ></CommentsBlock>*/}
      {/*    </Grid>*/}
      {/*</Grid>*/}

    </div>
  );
};
