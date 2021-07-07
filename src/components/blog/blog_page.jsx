import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import b1 from "./assets/b1.jpg";
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import getCookie from "../../utils/getCookie"
import LoginHooks from "../login/LoginHooks";
import LogoutHooks from "../logout/LogoutHooks";
import Navbar from '../navbar/navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default function BlogPage(props) {
    let { id } = useParams();
    const [user, setUser] = useState([])
    const [loadinguser, setLoadinguser] = useState(true);
    const [thread, setThread] = useState([]);
    const [comment, setComment] = useState([]);
    const [reply, setReply] = useState([]);
    const [loadingthread, setLoadingthread] = useState(true);
    const [loadingcomment, setLoadingcomment] = useState(true);
    const [loadingreply, setLoadingreply] = useState(true);
    const [filter, setFilter] = useState([]);
    const [visible, setVisible] = useState(false);
    const [like, setLike] = useState(true);
    const [user_image, setUser_image] = useState("");

    console.log("props", props)

    // @csrf_exempt
    function post_data() {

        // alert("working")

        const data = {
            email: "pqr@gmail.com",
            password: "passwordpqr",
        }

        fetch('http://0.0.0.0:8004/blog/api/user/create_user/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                //'Authorization': "Token "+token
                // "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => { console.log(data) })
    }



    useEffect(() => {
        if (loadingthread) {
            // if(props.id)
            // {
            fetch('http://0.0.0.0:8004/blog/api/blog/'+id )
                .then((result) => result.json())
                .then((res) => {
                    setThread(res)
                    setLoadingthread(false)
                    // console.log(thread,'Before')

                    var dat = new Date()
                    dat = dat.toDateString(thread.created_at)

                    var str = ""
                    if (thread.image) {

                        var arr = thread.image.split('/')
                        console.log(arr, "Inside ,Str")
                        arr.splice(3, 0, "static")
                        str = arr.join("/")

                        console.log(str, "Inside ,Str")
                    }

                    setThread((prevState) => ({
                        ...prevState,
                        created_at: dat,
                        image: str
                    }));

                    console.log(thread, "Blog")
                })

        }

        // } 

        if (loadingcomment) {
            // fetch('http://0.0.0.0:8004/blog/api/comment/')
            fetch('http://0.0.0.0:8004/blog/api/comment/'+ id +'/list_comments/')
                .then((result) => result.json())
                .then((res) => {
                    setComment(res)
                    setLoadingcomment(false)
                    let fl = []
                    var fl2 = [{ "id": 1, "name": "abc" }]
                    // comment.map((c) =>

                    //     // console.log(c,"C")
                    //     fl = comment.filter( (c) => c.thread_id==4)

                    //     // comment.filter(c.thread_id=4)    
                    // )

                    comment.forEach((c) => {
                        var dat = new Date()
                        dat = dat.toDateString(c.created_at)
                        c.created_at = dat
                    });

                    setComment(comment)

                    setFilter(fl2)
                    // console.log(comment[0].pk,"pk of first comment")
                    console.log(comment, "Comment", filter, "Filter", thread, "Thread")
                })
        }

        console.log(props.user, 'User  in blog page')
        // setUser(props.user)


        if (loadingreply) {
            fetch('http://0.0.0.0:8004/blog/api/reply/')
                .then((result) => result.json())
                .then((res) => {
                    setReply(res)
                    setLoadingreply(false)

                    reply.forEach((r) => {
                        var dat = new Date()
                        dat = dat.toDateString(r.created_at)
                        r.created_at = dat
                    });

                    setReply(reply)

                    console.log(reply, "Reply")
                })
        }

        setUser_image(localStorage.getItem("user_image"))
    }, [thread, comment, reply])

    const liked = (e) => {

        var base_url = 'http://0.0.0.0:8004/blog/api/blog/' + id

        let fd = new FormData()



        if (e.target.className.baseVal.includes('thread')) {
            if (like) {
                setThread((prevState) => ({
                    ...prevState,
                    likes: thread.likes + 1
                }));
                setLike(!like)
            }

            else {
                setThread((prevState) => ({
                    ...prevState,
                    likes: thread.likes - 1
                }));
                setLike(!like)

            }
        }

        if (e.target.className.baseVal.includes('comment')) {
            if (like) {
                comment.forEach((c) => {
                    if (c.pk == e.target.id) {
                        c.fields.likes = c.fields.likes + 1

                    }
                });
                setComment(comment)
                setLike(!like)
            }

            else {
                comment.forEach((c) => {
                    if (c.pk == e.target.id) {
                        c.fields.likes = c.fields.likes - 1

                    }
                });
                setComment(comment)
                setLike(!like)

            }
        }

        if (e.target.className.baseVal.includes('reply')) {
            if (like) {
                reply.forEach((r) => {
                    if (r.id == e.target.id) {
                        r.likes = r.likes + 1

                    }
                });
                setReply(reply)
                setLike(!like)
            }

            else {
                reply.forEach((r) => {
                    if (r.id == e.target.id) {
                        r.likes = r.likes - 1

                    }
                });
                setReply(reply)
                setLike(!like)

            }
        }

        console.log(e.target.className.baseVal, "event")




        // console.log(thread, 'Onclick')

        // fd.append('thread',thread)


        // fetch(base_url, {
        //     method: "PATCH",
        //     // headers: { "X-CSRFToken": getCookie("csrftoken") },
        //     body: thread,
        // })

    }

    return (
        <Container>
            <Navbar {...props} user={user}/>
            <br />
            <br />
            <br />
            <br />
            <div className="w3-card-4 w3-margin w3-white" style={{ border: "2px solid black", margin: "500px", align: "center" }}>
                <img src={thread.image} data="image/jpg;base64,iVBOR...." alt="Nature" style={{ width: '50%', marginTop: '20px' }} />
                <div className="w3-container">
                    <h2><b>{thread.title}</b></h2>
                    <h4 > Dr. Bharath Kumar B , <span className="w3-opacity">{thread.created_at}</span></h4>
                    <div align="center">
                        <hr style={{
                            height: "1px",
                            backgroundColor: "grey",
                            width: '500px'
                        }} />
                    </div>
                </div>

                <div className="w3-container" align="left">
                    <Typography variant="h6" style={{ margin: "20px" }}>
                        {thread.content}
                        {/* During the process of #LosingWeight, the first few kilos of #WeightLoss is all water which is stored along the             
                    Glycogen (stored carbohydrates in the liver and muscle).
                    The next few kilos of weight loss is a mixture of muscle and fat due to the catabolic state the body is in. 
                    However, over a period of few weeks,this stabilizes as the #Anabolism (Building) balances the #Catabolism (Break Down).              
                    On a long term basis, if the #Protein intake is adequate and if you are performing #StrengthTraining (Lifting Weights), 
                    the muscle mass is preserved and only #FatLoss occurs. 
                    The question is, how do we know?

                    That is where the #BodyCompositionAnalysis (BCA) provides objective information.

                    A simple BCA report has the following parameters:
                    1. Weight
                    2. Fat %
                    3. Muscle %
                    4. Visceral Fat

                    When #FatLoss occurs, the Fat% goes down while the #Muscle % remains stable or even increase as muscle is gained.

                    If BCA is NOT used to monitor the progress, it leads to a medical condition known as 'Sarcopenic Obesity' where in a person has 
                    #Sarcopenia (Low Lean Body Mass/Muscle) and still he/she is #Obese due to high body fat percentage. It leads to a multitude 
                    of diseases.

                    If there is muscle loss despite adequate protein intake and #StrengthTraining, it might be due to a condition called 
                    #Myopathy which may be fatal in the long term, seeking medical help is most necessary. */}
                    </Typography>
                    <hr style={{
                        marginLeft: 5,
                        marginRight: 5,
                        height: "1px",
                        border: "none",
                        backgroundColor: "grey",
                    }} />
                    <Grid container>
                        <br />
                        <Grid item xs={12} sm={12} align="center">
                            <a href="https://www.instagram.com/sportsmedicinedoctor/" target="_blank" style={{ margin: "10px" }}><AiOutlineInstagram size="30" /></a>

                            <a href="https://www.facebook.com/SportsMedicineDoctor/" target="_blank" style={{ margin: "10px" }}><AiOutlineFacebook size="30" /></a>

                            <a href="https://twitter.com/sportsdocindia" target="_blank" style={{ margin: "10px" }}><AiFillTwitterCircle size="30" /></a>

                            <a href="https://www.linkedin.com/in/sportsmedicinedoctor/" target="_blank" style={{ margin: "10px" }}><AiFillLinkedin size="30" /></a>
                        </Grid>
                    </Grid>
                    <hr style={{
                        marginLeft: 5,
                        marginRight: 5,
                        height: "1px",
                        border: "none",
                        backgroundColor: "grey",
                    }} />
                    <Box px={2} pb={2} mt={-1}>

                        <IconButton>
                            <FavoriteBorderRounded id={thread.id} className='thread' onClick={liked} />
                        </IconButton>
                        {thread.likes}

                        <IconButton>
                            <VisibilityIcon />
                        </IconButton>
                        {thread.views}

                        <IconButton>
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                        {comment.length}
                    </Box>
                </div>
            </div>
            <div className="w3-card-4 w3-margin w3-white" style={{ border: "2px solid black", margin: "100px" }}>
                <br />

                <Grid container>
                    <Grid item xs={12} sm={2}>
                        2 comments
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <select >
                            <option >Oldest</option>
                            <option >Newest</option>
                        </select>
                    </Grid>
                </Grid>
                <hr style={{
                    marginLeft: 5,
                    marginRight: 5,
                    height: "1px",
                    border: "none",
                    backgroundColor: "grey",
                }} />
                <div>
                    <Grid container spacing={1} alignItems="flex-end" style={{ margin: '50px' }}>
                        
                        <Grid item>
                            {user_image!=null?<Avatar src={user_image}/>:<Avatar />}
                            
                        </Grid>
                        <Grid item style={{ marginLeft: "20px" }}>
                            <TextField id="input-with-icon-grid" label="Write a comment" onChange={() => { setVisible(true) }}
                            />
                            {visible == true ? <LoginHooks />
                                : <LogoutHooks />}
                            {/* <Button onClick={()=>post_data()} >Post</Button> */}
                            {/* {console.log(currentUser,"CurrentUser")} */}
                        </Grid>
                    </Grid>

                    {
                        comment.map((m) =>
                            // m.thread_id==4?
                            <div>
                                <Grid container style={{ marginLeft: '50px' }}>
                                    <Grid item>
                                        <Avatar alt="Remy Sharp" src={b1} />
                                    </Grid>
                                    <Grid item style={{ marginLeft: "20px" }}>
                                        <Typography>
                                            {/* Dr. Bharat Kumar B */}
                                            {m.fields.created_by}
                                        </Typography>
                                        <Typography variant="subtitle2" className="w3-opacity">
                                            {m.created_at}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{ marginLeft: '50px', marginTop: "20px" }}>
                                    {/* Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating. */}
                                    {m.fields.content}
                                </Grid>


                                <Grid container style={{ marginLeft: "20px", marginTop: "20px" }}>
                                    <Box px={2} pb={2} mt={-1}>

                                        <IconButton>
                                            <FavoriteBorderRounded id={m.pk} className='comment' onClick={liked} />
                                        </IconButton>
                                        {/* Like  */}
                                        {m.fields.likes > 0 ? m.fields.likes : "Like"}
                                        <IconButton>
                                            <ChatBubbleOutlineIcon />
                                        </IconButton>
                                        Reply
                                    </Box>
                                </Grid>

                                {
                                    reply.map((r) =>
                                        r.comment_id == m.pk ?
                                            <div style={{ borderLeft: "1px solid grey", marginLeft: "100px" }}>
                                                <Grid container style={{ marginLeft: '50px' }}>
                                                    <Grid item>
                                                        <Avatar alt="Remy Sharp" src={b1} />
                                                    </Grid>
                                                    <Grid item style={{ marginLeft: "20px" }}>
                                                        <Typography>
                                                            {/* Dr. Bharat Kumar B */}
                                                            {r.created_by}
                                                        </Typography>
                                                        <Typography variant="subtitle2" className="w3-opacity">
                                                            {/* 18th June, 2021 */}
                                                            {r.created_at}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container style={{ marginLeft: '50px', marginTop: "20px" }}>
                                                    {/* Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating. */}
                                                    {r.content}
                                                </Grid>

                                                <Grid container style={{ marginLeft: "20px", marginTop: "20px" }}>
                                                    <Box px={2} pb={2} mt={-1}>

                                                        <IconButton>
                                                            <FavoriteBorderRounded id={r.id} className='reply' onClick={liked} />
                                                        </IconButton>
                                                        {r.likes > 0 ? r.likes : "Like"}
                                                    </Box>
                                                </Grid>
                                                <hr style={{ marginLeft: '30px', width: '90%' }} />
                                            </div>
                                            : null
                                    )}
                            </div>
                            // :
                            //     null
                        )
                        // <Grid container spacing={1} alignItems="flex-end" style={{margin:'50px'}}>
                        //     <Grid item>
                        //         <AccountCircle fontSize="large"/>
                        //     </Grid>
                        //     <Grid item style={{marginLeft:"20px"}}>
                        //         <TextField id="input-with-icon-grid" label="Write a comment" />
                        //     </Grid>
                        //     </Grid>
                    }

                </div>
            </div>
        </Container>

    );
}

//dynamic redirection from blog to here to be done - done
//created_by has to show user name. Now it is showing id
//Avatar to be replaced with logged in user's photo - done
//Actual linking of api to backend is left. Likes, comments
//api's related to post comment to be written
//sorting based on oldest, newest to be done