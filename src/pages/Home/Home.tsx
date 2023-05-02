import {useEffect} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import styles from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/posts";
import {Post} from '../../components/Post';
import {TagsBlock} from '../../components/TagsBlock';
import {CommentsBlock} from '../../components/CommentsBlock';
import TimeLine from "./TimeLine";
import Months from "./Months";
import {UserInfo} from "../../components";


export const Home = () => {
    const dispatch: any = useDispatch();
    const {posts, tags} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    return (
        <div className={styles.wrapper}>

            <Tabs style={{marginBottom: 15}} value={0} aria-label="basic tabs example">
                <Tab label="Весь год"/>
                <Tab label="Сегодня"/>
            </Tabs>

            <div className={styles.table}>
                <div className={styles.tableLine}>
                    <div className={styles.months}>
                        <Months/>
                    </div>
                    <div>
                        <div className={styles.card}>
                            <div className={styles.person}>
                                <UserInfo avatarUrl={"http://www.interface.ru/iarticle/img/23221_38289142.jpg"}
                                          fullName={"Кирилл И."} additionalText={"15/10"}/>
                            </div>
                            <TimeLine reserved={[1, 3, 5]} idPerson={"w"}/>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.person}>
                                <UserInfo
                                    avatarUrl={"https://icdn.lenta.ru/images/2021/11/10/13/20211110130606121/detail_d6b057076e2a8350397b88e71a70b514.jpg"}
                                    fullName={"Антон Л."} additionalText={"15/10"}/>
                            </div>
                            <TimeLine reserved={[1, 3, 5]} idPerson={"k"}/>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.person}>
                                <UserInfo
                                    avatarUrl={"https://tochka.by/upload/resize_cache/iblock/587/768_512_1/rwn72tl74r6erjav9fxtg5myp424t798.jpg"}
                                    fullName={"Маша К."} additionalText={"30/10"}/>
                            </div>
                            <TimeLine reserved={[1, 3, 5]} idPerson={"l"}/>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.person}>
                                <UserInfo
                                    avatarUrl={"https://tengrinews.kz/userdata/u380/2023-01/resize/837000ec9714d99ae660b6eb026cfbcd.jpeg"}
                                    fullName={"Двитрий Р."} additionalText={"15/10"}/>
                            </div>
                            <TimeLine reserved={[9, 10]} idPerson={"d"}/>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.person}>
                                <UserInfo
                                    avatarUrl={"https://metaratings.ru/_images/insecure/w-680:h-512/bG9jYWw6Ly8vaW1hZ2VzL2QxL2I4L2QxYjgzOTYxMjcyOGNlM2Y4YzQyMDg3Y2Y2YTU2M2NkLmpwZw==.webp"}
                                    fullName={"Людмила К."} additionalText={"15/10"}/>
                            </div>
                            <TimeLine reserved={[1, 3, 5]} idPerson={"r"}/>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.person}>
                                <UserInfo avatarUrl={"https://s16.stc.yc.kpcdn.net/share/i/12/12492885/wr-960.webp"}
                                          fullName={"Ирина Ж."} additionalText={"15/10"}/>
                            </div>
                            <TimeLine reserved={[1, 3, 5]} idPerson={"w"}/>
                        </div>
                    </div>
                </div>
            </div>

            <Grid container spacing={4}>
                <Grid xs={8} item>
                    {[...Array(5)].map(() => (
                        <Post
                            _id={1}
                            title="Roast the code #1 | Rock Paper Scissors"
                            imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
                            user={{
                                avatarUrl:
                                    'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                                fullName: 'Keff',
                            }}
                            createdAt={'12 июня 2022 г.'}
                            viewsCount={150}
                            commentsCount={3}
                            tags={['react', 'fun', 'typescript']}
                            isEditable
                            isLoading={true}
                        />
                    ))}
                </Grid>
                <Grid xs={4} item>
                    <TagsBlock items={['react', 'typescript', 'заметки']} isLoading={false}/>
                    <CommentsBlock
                        items={[
                            {
                                user: {
                                    fullName: 'Вася Пупкин',
                                    avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                                },
                            }
                        ]}
                        isLoading={false}
                    ></CommentsBlock>
                </Grid>
            </Grid>
        </div>
    );
};
