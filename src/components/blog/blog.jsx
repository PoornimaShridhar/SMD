import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Grid from '@material-ui/core/Grid';
import BlogPage from './blog_page';
import Navbar from '../navbar/navbar';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter, Link, NavLink } from "react-router-dom";
import b1 from "./assets/b1.jpg";
import b2 from "./assets/b2.jpeg";
import b3 from "./assets/b3.jpeg";
import b4 from "./assets/b4.jpg";
import LoginHooks from '../login/LoginHooks';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
        margin: 'auto',
    },
    content: {
        padding: 24,
    },
    avatar: {
        width: 50,
        height: 50,
        border: '2px solid #fff',
        margin: '-48px 32px 0 auto',
        '& > img': {
            margin: 0,
        },
    },
}));

export const Blog = React.memo(
    function Blog() {

        const [visible, setVisible] = useState(false)
        const [email, setEmail] = useState("");
        const [credentials, setCredentials] = useState([])
        const [loadingcred, setLoadingcred] = useState(true);
        const [loadblog, setLoadblog] = useState(false);
        const [saveid, setSaveid] = useState();
        const [users, setUsers] = useState({});
        const [liked, setLiked] = useState(true);
        const [id, setId] = useState(0);
        const [view, setView] = useState(true);
        const [entryPresent, setEntryPresent] = useState()
        const [likedPosts, setLikedPosts] = useState([])
        const cardStyles = useStyles();
        const mediaStyles = useSlopeCardMediaStyles();
        const shadowStyles = useSoftRiseShadowStyles();
        const textCardContentStyles = useN01TextInfoContentStyles();

        useEffect(() => {
            if (loadingcred) {
                fetch('http://0.0.0.0:8004/blog/api/blog/1/get_threads')
                    .then((result) => result.json())
                    .then((res) => {
                        setLoadingcred(false)
                        setCredentials(res)
                    })

            }

            
            setLoadingcred(true)
            var str = ""

            credentials.forEach((c) => {
                var dat = new Date()
                dat = dat.toDateString(c.fields.created_at)
                c.fields.created_at = dat


                if (c.fields.image != null) {
                    // console.log(c.fields.image, "CHeck")
                    str = ""
                    var arr = c.fields.image.split('/')
                    // console.log(arr, "Inside ,Str")
                    arr.splice(0, 0, "/static/")
                    str = arr.join("/")
                    // str = "/"+str + "/"
                    c.fields.image = str


                    // console.log(c, "Inside")
                }
            });
            setCredentials(credentials)

            
            setEmail(localStorage.getItem("user_email"))
            if (email!="undefined")
            {
                // var a = JSON.parse(localStorage.getItem('thread_likes_id')).length
                setEntryPresent(JSON.parse(localStorage.getItem('thread_likes_id')))
                // var b = entryPresent[a-1]
                // localStorage.setItem('id',b.id)
                // setSaveid(localStorage.getItem('id'))
                console.log(entryPresent,'Entry First')

            }

            
            // var arrayLength = entryPresent.length;
            // for (var i = 0; i < arrayLength; i++) {
            //     console.log(entryPresent[i]);
            //     //Do something
            // }




            // console.log(entryPresent,"Entry Present")
            



        }, [credentials])

        console.log(credentials, "cred")


        const viewed = (e) => {
            var base_url = 'http://0.0.0.0:8004/blog/api/blog/' + e.target.id + '/update_thread/'
            var data = []
            credentials.forEach((c) => {
                // console.log("c", c.pk)
                if (c.pk == e.target.id) {
                    if (view) {

                        c.fields.views = c.fields.views + 1
                        setView(!view)
                    }
                    data = {
                        title: c.fields.title,
                        content: c.fields.content,
                        created_by: c.fields.created_by,
                        duration: c.fields.duration,
                        views: c.fields.views
                    }
                }
            })

            console.log(data, 'data')

            fetch(base_url, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    // "X-CSRFToken": getCookie("csrftoken")
                },
                body: JSON.stringify(data)
            })
                .then(res => { console.log(res, "***********************comments_result") })

        }

        // const liked=(e) => {
        //     console.log("e.target.id", e.target.id)
        //     var base_url = 'http://0.0.0.0:8004/blog/api/blog/'+ e.target.id +'/update_thread/'
        //     var data = []

        //     credentials.forEach((c) => {
        //         if(c.pk == e.target.id)
        //         {
        //             if(like)
        //             {
        //                 c.fields.likes = c.fields.likes+1
        //                 setLike(!like)
        //             }

        //             else
        //             {
        //                 c.fields.likes = c.fields.likes-1
        //                 setLike(!like)
        //             }
        //             data = {
        //                 title: c.fields.title,
        //                 content: c.fields.content,
        //                 created_by: c.fields.created_by,
        //                 duration:c.fields.duration,
        //                 likes:c.fields.likes
        //               }

        //         }

        //     })


        //     console.log(data,"event")


        //     fetch(base_url,{
        //         method: "PUT",
        //         headers:{
        //           'Accept': 'application/json',
        //           'Content-type': 'application/json',
        //           // "X-CSRFToken": getCookie("csrftoken")
        //         },
        //         body: JSON.stringify(data)
        //       })
        //       .then(res=>{console.log(res, "***********************likes_result")})

        // }

        const likedpost = (e) => {
            console.log("Liked Post", e.target.id)
            var base_url1 = 'http://0.0.0.0:8004/blog/api/blog/' + e.target.id + '/update_thread/'
            var base_url2 = 'http://0.0.0.0:8004/blog/api/threadLikes/'
            var data1 = []
            var data2 = []

            credentials.forEach((c) => {
                if (c.pk == e.target.id) 
                {
                    c.fields.likes = c.fields.likes + 1
                    setLiked(!liked)
                    data1 = {
                        title: c.fields.title,
                        content: c.fields.content,
                        created_by: c.fields.created_by,
                        duration: c.fields.duration,
                        likes: c.fields.likes
                    }     
                }
            })

            data2 = {
                liked_by: 2,
                thread_id: e.target.id
            }
            console.log(data2, "data2")

            fetch(base_url1, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data1)
            })
            .then(res => 
                { 
                    console.log(res, "***********************likes_result") 

                    //Add Part
                    fetch(base_url2, {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(data2)
                    })
                    .then(res => { console.log(res, "***********************likes_result") })
                
                })
                
                // window.location.reload(false);

                setVisible(true)
        }

        const alertpost = (e) => {
            alert('Please Log in')
        }

        const unliked = (e) => {
            console.log("Unliked Post", e.target.id)
            var base_url1 = 'http://0.0.0.0:8004/blog/api/blog/' + e.target.id + '/update_thread/'
            
            var data1 = []
            var data2 = []

            credentials.forEach((c) => {
                if (c.pk == e.target.id) {

                    c.fields.likes = c.fields.likes - 1
                    setLiked(!liked)
                    data1 = {
                        title: c.fields.title,
                        content: c.fields.content,
                        created_by: c.fields.created_by,
                        duration: c.fields.duration,
                        likes: c.fields.likes
                    }     
                }

            })

            data2 = {
                liked_by: localStorage.getItem("user_email"),
                thread_id: e.target.id,
            }
            console.log(data1, "event")

            fetch(base_url1, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data1)
            })
            .then(res => 
                {
                    console.log(res, "***********************unliked_result") 
                    var delete_id=""
                    fetch('http://0.0.0.0:8004/blog/api/threadLikes/')
                    .then((result) => result.json())
                    .then((res) => {
                        console.log(res,'Unliked Threads')

                        res.map((r)=>
                        {
                            if(r.liked_by== localStorage.getItem('id') && entryPresent.includes(r.thread_id))
                            {
                                delete_id=r.id
                                // entryPresent.pop(r.thread_id)
                                // console.log(entryPresent,'Poped')
                                // localStorage.setItem('thread_likes_id',entryPresent)
                            }
                        }
                        )

                        //Delete Part
                        var base_url2 = 'http://0.0.0.0:8004/blog/api/threadLikes/'+delete_id

                        fetch(base_url2, {
                            method: "DELETE",
                            headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json',
                            },
                            body: JSON.stringify(data2)
                        })
                        .then(res => {
                             console.log(res, "***********************unliked_result") })

                    })

                })
            // window.location.reload(false);
            setVisible(true)
        }




        return (
            <div>

                <Grid container>
                    {
                        credentials.map((cred) =>

                            <Grid item xs={12} sm={4} style={{ marginTop: "100px", paddingRight: "20px" }}>
                                <Card className={cx(cardStyles.root, shadowStyles.root)} id={cred.pk}
                                    >
                                    <Link to={`/blog/blogPage/${cred.pk}`}>
                                        <CardMedia
                                            classes={mediaStyles}
                                            image={
                                                cred.fields.image
                                            }
                                            id={cred.pk}
                                            onClick={viewed}

                                        />
                                    </Link>
                                    <Avatar className={cardStyles.avatar} >
                                        <IconButton>
                                            <Share />
                                        </IconButton>
                                    </Avatar>

                                    <CardContent className={cardStyles.content}>
                                        <TextInfoContent
                                            classes={textCardContentStyles}
                                            heading={cred.fields.title}

                                        />
                                        <div style={{ fontSize: "12px", color: 'grey' }}>
                                            {cred.fields.created_at}
                                        </div>
                                    </CardContent>
                                    <Box px={2} pb={2} mt={-1}>

                                        <IconButton>
                                            {/* {liked ? <FavoriteBorderRounded id={cred.pk} onClick={likedpost} /> :
                                                saveid==cred.pk?
                                                <FavoriteIcon id={cred.pk} onClick={unliked} />:<FavoriteBorderRounded id={cred.pk} onClick={likedpost} />} */}

                                            {
                                            email=="undefined"? <FavoriteBorderRounded onClick={alertpost} />:

                                            entryPresent.includes(cred.pk)?
                                                <FavoriteBorderRounded  id={cred.pk} onClick={unliked} />:<FavoriteBorderRounded id={cred.pk} onClick={likedpost} />
                                                }

                                        </IconButton>
                                        {cred.fields.likes > 0 ? cred.fields.likes : "Like"}

                                        <IconButton>
                                            <VisibilityIcon />
                                        </IconButton>
                                        {cred.fields.views > 0 ? cred.fields.views : "0"}

                                        <IconButton>
                                            <ChatBubbleOutlineIcon />
                                        </IconButton>
                                        {cred.fields.comments}
                                    </Box>
                                </Card>

                            </Grid>
                        )
                    }
                </Grid>

            </div>
        );
    });

export default Blog;

//function for calculating views per blog- done
//like api to be added - worked. But logic to be changed
//comments to be calculated at backend and sent- done
//implementing share functionality

//size of blog cards is inconsistent if the number of cards are less than 5