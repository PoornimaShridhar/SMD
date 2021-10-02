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
import Share from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { InstapaperShareButton, FacebookShareButton, 
    TwitterShareButton,  LinkedinShareButton,
    FacebookIcon,  LinkedinIcon, TwitterIcon,} from "react-share";
import Button from 'react-bootstrap/Button';
// import Share1 from "./modal.jsx"

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
        const [commentsFromThread, setCommentsFromThread] = useState([])
        const [loadingCommentsFromThread, setLoadingCommentsFromThread] = useState(true)
        const [loadingThreadLikes, setloadingThreadLikes] = useState(true);
        const [loadblog, setLoadblog] = useState(false);
        const [saveid, setSaveid] = useState();
        const [users, setUsers] = useState({});
        const [liked, setLiked] = useState(true);
        const [id, setId] = useState(0);
        const [view, setView] = useState(true);
        const [threadLikes, setThreadLikes] = useState([])
        const [likedPosts, setLikedPosts] = useState([])
        const cardStyles = useStyles();
        const mediaStyles = useSlopeCardMediaStyles();
        const shadowStyles = useSoftRiseShadowStyles();
        const textCardContentStyles = useN01TextInfoContentStyles();
        const [modalShow, setModalShow] = useState(false);

        useEffect(() => {
            if (loadingcred) {
                // fetch('http://0.0.0.0:8004/blog/api/blog/1/get_threads')
                fetch('http://0.0.0.0:8004/blog/api/blog/')
                    .then((result) => result.json())
                    .then((res) => {
                        setLoadingcred(false)
                        setCredentials(res)
                        console.log(res, "all threads")
                    })
            }

            setLoadingcred(true)

            if (loadingCommentsFromThread){
                fetch('http://0.0.0.0:8004/blog/api/blog/1/get_threads')
                    .then((result) => result.json())
                    .then((res) => {
                        setLoadingCommentsFromThread(false)
                        setCommentsFromThread(res)
                        console.log(res, "all comments from threads")
                    })
            }

            setLoadingCommentsFromThread(true)


            var str = ""

            credentials.forEach((c) => {
                var dat = new Date()
                dat = dat.toDateString(c.created_at)
                c.created_at = dat


                commentsFromThread.forEach((co) => {
                    if (c.id == co.pk)
                    {
                        c.comments = co.fields.comments
                    }
                })

                if (c.image != null) {
                    console.log(c.image, "CHeck")
                    str = ""
                    var arr = c.image.split('/')
                    arr.splice(3, 0, "static")
                    str = arr.join("/")
                    c.image = str   
                }
            });
            setCredentials(credentials)

            
            setEmail(localStorage.getItem("user_email"))
            console.log(email, "state var email")
           
            // if (loadingThreadLikes)
            // {
                if (email!="undefined")
                {
                    setId(localStorage.getItem("id"))
                    fetch('http://0.0.0.0:8004/blog/api/threadLikes/' + id +'/list_user_thread_likes_/')
                    .then(response => response.json())
                    .then((data)=>{
                    console.log(data, "thread likes")
                    //   setThreadLikes(data)
                    data.forEach((d)=>{
                        if (!threadLikes.includes(d.fields.thread_id))
                        {
                        threadLikes.push(d.fields.thread_id)
                        }
                    })
                    // setThreadLikes(threadLikes)
                    localStorage.setItem("thread_likes",threadLikes)
                    
                    console.log(threadLikes,"state var thread likes")
                    credentials.map((cred)=>{
                        console.log(threadLikes.includes(cred.id),"checking pk new", cred.id)
                    })
                    // setThreadLikes(threadLikes)
                    })
                    // setThreadLikes(JSON.parse(localStorage.getItem('thread_likes_id')))
                
                    // console.log(threadLikes,'Entry First') 
                }
                // setloadingThreadLikes(false)
            // }
            
                console.log(threadLikes,"last line of useEffect")
                // window.location.reload(false);

        }, [credentials, threadLikes, email, id, modalShow])

        const viewed = (e) => {
            alert("inside viewed function")
            var base_url = 'http://0.0.0.0:8004/blog/api/blog/' + e.target.id + '/update_thread/'
            var data = []
            credentials.forEach((c) => {
                // if (c.pk == e.target.id)
                if (c.id == e.target.id)
                 {
                    if (view) {

                        c.views = c.views + 1
                        setView(!view)
                    }
                    data = {
                        title: c.title,
                        content: c.content,
                        created_by: c.created_by,
                        duration: c.duration,
                        views: c.views
                    }
                }
            })

            console.log(data, 'data')

            fetch(base_url, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(res => { console.log(res, "***********************comments_result") })

        }


        const likedpost = (e) => {
           
            console.log("Liked Post", e.target.id)
            var base_url1 = 'http://0.0.0.0:8004/blog/api/blog/' + e.target.id + '/update_thread/'
            var base_url2 = 'http://0.0.0.0:8004/blog/api/threadLikes/'
            var data1 = []
            var data2 = []

            credentials.forEach((c) => {
                if (c.id == e.target.id) 
                {
                    c.likes = c.likes + 1
                    setLiked(!liked)  
                    data1 = {
                        title: c.title,
                        content: c.content,
                        created_by: c.created_by,
                        duration: c.duration,
                        likes: c.likes
                    } 
                }
            })

            data2 = {
                liked_by: id,
                thread_id: e.target.id
            }
            // console.log(data2, "data2")

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
                    // console.log(res, "***********************likes_result") 

                    //Add Part
                    fetch(base_url2, {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(data2)
                    })
                    .then(res => {
                    setThreadLikes([])
                    fetch('http://0.0.0.0:8004/blog/api/threadLikes/' + id +'/list_user_thread_likes_/')
                    .then(response => response.json())
                    .then((data)=>{
                      console.log(data, "thread likes from liked function api")
                    //   setThreadLikes(data)
                      data.forEach((d)=>{
                        if (!threadLikes.includes(d.fields.thread_id))
                        {
                          threadLikes.push(d.fields.thread_id)
                          setThreadLikes(threadLikes)
                        }
                      })
                      localStorage.setItem("thread_likes",threadLikes)
                
                      console.log(threadLikes,"thread likes from likes function state variable")
                      
                    })
                    // setloadingThreadLikes(true)
                })
                })

                // setVisible(true)
        }

        const alertpost = (e) => {
            alert('Please Log in')
        }

        const unliked = (e) => {
           
            // console.log("Unliked Post", e.target.id)
            var base_url1 = 'http://0.0.0.0:8004/blog/api/blog/' + e.target.id + '/update_thread/'
            
            var data1 = []
            var data2 = []

            credentials.forEach((c) => {
                if (c.id == e.target.id) {

                    c.likes = c.likes - 1
                    setLiked(!liked)
                    data1 = {
                        title: c.title,
                        content: c.content,
                        created_by: c.created_by,
                        duration: c.duration,
                        likes: c.likes
                    }        
                }
            })

            data2 = {
                liked_by: id,
                thread_id: e.target.id,
            }
            // console.log(data1, "event")

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
                        // console.log(res,'Unliked Threads')

                        res.map((r)=>
                        {
                            if(r.liked_by== id && threadLikes.includes(r.thread_id))
                            {
                                delete_id=r.id
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
                            //  console.log(res, "***********************unliked_result") 
                             setThreadLikes([])
                             fetch('http://0.0.0.0:8004/blog/api/threadLikes/' + id +'/list_user_thread_likes_/')
                             .then(response => response.json())
                             .then((data)=>{
                               console.log(data, "thread likes from unliked api")
                            //    setThreadLikes(data)
                               data.forEach((d)=>{
                                if (!threadLikes.includes(d.fields.thread_id))
                                {
                                   threadLikes.push(d.fields.thread_id)
                               
                                }
                               })
                               localStorage.setItem("thread_likes",threadLikes)
                            //    setThreadLikes(threadLikes)
                               console.log(threadLikes,"thread likes from un-likes func state variable")
                               
                             })
                            // setloadingThreadLikes(true)

                            })
                    })
                })
            // setVisible(true)
            
        }
        return (
            <div>
                
                <Grid container style={{marginTop:"200px"}}>
                    {
                        credentials.map((cred) =>

                            <Grid item xs={12} sm={4} style={{ marginTop: "100px", paddingRight: "20px" }}>
                                <Card className={cx(cardStyles.root, shadowStyles.root)} id={cred.id}
                                    >
                                    <Link to={`/blog/blogPage/${cred.id}`}>
                                        <CardMedia
                                            classes={mediaStyles}
                                            image={
                                                cred.image
                                            }
                                            id={cred.id}
                                            onClick={viewed}

                                        />
                                    </Link>
                                    {/* <Avatar className={cardStyles.avatar} >
                                        <IconButton>
                                            <Share />
                                        </IconButton>
                                    </Avatar> */}

                                    
                                        {/* <Avatar className={cardStyles.avatar} >
                                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                                <IconButton>
                                                    <Share />
                                                </IconButton> */}
                                                {/* <Share1 /> */}
                                            {/* </Button>
                                        </Avatar> */}

                                        <Modal style={{marginTop:"400px"}}
                                        show= {modalShow}
                                        onHide= {()=> {setModalShow(false)} }
                                        size="sm"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        >
                                        <Modal.Header closeButton style={{marginTop:"30px"}}>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                            Modal heading
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body >
                                        {/* <Grid container>
                                                <br />
                                                <Grid item xs={12} sm={12} align="center"> */}
                                                   
                                                    <FacebookShareButton style={{margin:"5px"}}
                                                        url="https://www.sportsmedicinedoctor.in/post/when-is-snacking-good-for-you">
                                                        <FacebookIcon size="35" round/>
                                                    </FacebookShareButton>
        
                                                    
                                                    <TwitterShareButton style={{margin:"5px"}}
                                                        url="https://www.sportsmedicinedoctor.in/post/when-is-snacking-good-for-you">
                                                        <TwitterIcon size="35" round />
                                                    </TwitterShareButton>
        
                                                    
                                                    <LinkedinShareButton style={{margin:"5px"}}
                                                        url="https://www.sportsmedicinedoctor.in/post/when-is-snacking-good-for-you">
                                                        <LinkedinIcon size="35" round/>
                                                    </LinkedinShareButton>
                                                
                                                {/* </Grid>
                                            </Grid> */}
                                           
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button  onClick={() => setModalShow(false)}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                    
                                    <CardContent className={cardStyles.content} style={{backgroundColor:""}}>
                                        <TextInfoContent
                                            classes={textCardContentStyles}
                                            // heading={cred.fields.title}
                                            heading={cred.title}

                                        />
                                        <div style={{ fontSize: "12px", color: 'grey' }}>
                                            {/* {cred.fields.created_at} */}
                                            {cred.created_at}
                                        </div>
                                    </CardContent>
                                    <Box px={2} pb={2} mt={-1} style={{backgroundColor:"pink"}}>

                                        <IconButton>
                                            {
                                            email==null?<FavoriteBorderRounded onClick={alertpost} />:
                                            email!="undefined"? 

                                            
                                            threadLikes.includes(cred.id)?
                                              <FavoriteBorderRounded style={{color:"red"}}  id={cred.id} onClick={unliked} />:
                                                <FavoriteBorderRounded  id={cred.id} onClick={likedpost} />
                                                : <FavoriteBorderRounded onClick={alertpost} /> 
                                                }

                                        </IconButton>
                                        {cred.likes > 0 ? cred.likes : "Like"}

                                        <IconButton>
                                            <VisibilityIcon />
                                        </IconButton>
                                        {cred.views > 0 ? cred.views : "0"}

                                        <IconButton>
                                            <ChatBubbleOutlineIcon />
                                        </IconButton>
                                        {cred.comments}
                                    </Box>
                                </Card>

                            </Grid>
                        )
                    }
                </Grid>
                    <br /><br />
            </div>
        );
    });

export default Blog;

//function for calculating views per blog- done
//like api to be added - worked. But logic to be changed
//comments to be calculated at backend and sent- done
//implementing share functionality

//likes to be fixed

//implementing share functionality
//blog image is not being displayed

//15th july
//as of now create user serializer has get_or_create. This should work in case of existing db users logging in.
//check in different scenarios 