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
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./style.scss";
import SettingsIcon from '@material-ui/icons/Settings';
import { CommentSharp } from '@material-ui/icons';
import { InstapaperShareButton, FacebookShareButton, 
    TwitterShareButton,  LinkedinShareButton,
    FacebookIcon,  LinkedinIcon, TwitterIcon,} from "react-share";
import ReactDOMServer from 'react-dom/server';
import Html2ReactParser from 'html-to-react/lib/parser';

export default function BlogPage(props) {
    let { id } = useParams();
    const [threadUsers, setThreadUsers] = useState([]);
    const [loadinguser, setLoadinguser] = useState(true);
    const [thread, setThread] = useState([]);
    const [comment, setComment] = useState([]);
    const [reply, setReply] = useState([]);
    const [loadingthread, setLoadingthread] = useState(true);
    const [email, setEmail] = useState("");
    const [threadLikes, setThreadLikes] = useState([])
    const [commentLikes, setCommentLikes] = useState([])
    const [replyLikes, setReplyLikes] = useState([])
    const [user_id, setUserId] = useState(0)
    const [user_list, setUserList] = useState([])
    const [liked, setLiked] = useState(true);
    const [loadingcomment, setLoadingcomment] = useState(true);
    const [commentText, setCommentText] = useState("");
    const [replyText, setReplyText] = useState("");
    const [loadingreply, setLoadingreply] = useState(true);
    const [filter, setFilter] = useState([]);
    const [visible, setVisible] = useState(false);
    const [like, setLike] = useState(true);
    const [user_image, setUser_image] = useState("");
    const [CommentToggle, setCommentToggle] = useState("")
    const [replyToggle, setReplyToggle] = useState("")
    const [replyEditToggle, setReplyEditToggle] = useState("")
    const [updatecomment, setUpdatecomment] = useState("")

    console.log("props", props)
   
    // @csrf_exempt
    useEffect(() => {
        if (loadingthread) {
            // if(props.id)
            // {
            fetch('/blog/api/blog/'+id+'/')
                .then((result) => result.json())
                .then((res) => {
                    setThread(res)
                    setLoadingthread(false)
                    console.log(thread,'Before')

                    var dat = new Date()
                    dat = dat.toDateString(thread.created_at)

                    var str = ""
                    if (thread.image) {

                        var arr = thread.image.split('/')
                        console.log(arr, "Inside ,Str")
                        // arr.splice(3, 0, "")
                        str = arr.join("/")

                        console.log(str, "Inside ,Str")
                    }

                    setThread((prevState) => ({
                        ...prevState,
                        created_at: dat,
                        image: str
                    }));

                    console.log(thread, "Blog")
                    
                    console.log("%%%%%%%%%%%%         %%%%%%user_id%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", user_id)
                })

        }
                    
        // } 

        if (loadingcomment) {
            // fetch('/blog/api/comment/')
            fetch('/blog/api/comment/'+ id +'/list_comments/')
                .then((result) => result.json())
                .then((res) => {
                    setComment(res)
                    console.log(res, "format of comments ")
                    setLoadingcomment(false)
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
            fetch('/blog/api/reply/'+ id +'/list_replies/')
                .then((result) => result.json())
                .then((res) => {
                    setReply(res)
                    setLoadingreply(false)

                    reply.forEach((r) => {
                        var dat = new Date()
                        dat = dat.toDateString(r.fields.created_at)
                        r.fields.created_at = dat
                    });

                    setReply(reply)

                    console.log(reply, "Reply")
                })
        }

        setUser_image(localStorage.getItem("user_image"))
       
        setEmail(localStorage.getItem("user_email"))
            console.log(email, "state var email")
            if (email!="undefined")
            {
                
                // setThreadLikes(JSON.parse(localStorage.getItem('thread_likes_id')))
                // setUserId(localStorage.getItem("id"))
                // console.log(threadLikes,'Entry First')

                setUserId(localStorage.getItem("id"))
                fetch('/blog/api/threadLikes/' + user_id +'/list_user_thread_likes_/')
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
                // credentials.map((cred)=>{
                //     console.log(threadLikes.includes(cred.id),"checking pk new", cred.id)
                // })
                // setThreadLikes(threadLikes)
                })

                fetch('/blog/api/commentLikes/' + user_id +'/list_user_comment_likes_/')
                .then(response => response.json())
                .then((data)=>{
                console.log(data, "comment likes")
                //   setThreadLikes(data)
                data.forEach((d)=>{
                    if (!commentLikes.includes(d.fields.comment_id))
                    {
                        commentLikes.push(d.fields.comment_id)
                    }
                })
                // setThreadLikes(threadLikes)
                // localStorage.setItem("thread_likes",threadLikes)
                
                console.log(commentLikes,"state var comment likes")
                })

                fetch('/blog/api/replyLikes/' + user_id +'/list_user_reply_likes_/')
                .then(response => response.json())
                .then((data)=>{
                console.log(data, "reply likes")
                //   setThreadLikes(data)
                data.forEach((d)=>{
                    if (!replyLikes.includes(d.fields.reply_id))
                    {
                        replyLikes.push(d.fields.reply_id)
                    }
                })
                // setThreadLikes(threadLikes)
                // localStorage.setItem("thread_likes",threadLikes)
                
                console.log(replyLikes,"state var reply likes")
                })

            }

            console.log("thread id : ", thread.id)
            if(loadinguser){
                    // comment.forEach((c)=>{
                    //     if (!threadUsers.includes(c.fields.created_by)){
                    //     threadUsers.push(c.fields.created_by)}
                    // })
                    // reply.forEach((c)=>{
                    //     if (!threadUsers.includes(c.fields.created_by)){
                    //         threadUsers.push(c.fields.created_by)}
                    // })
                    // // let uniqueChars = [...new Set(threadUsers)];
                    // console.log(threadUsers,"thread users list")

                    // const data = threadUsers

                    fetch('/blog/api/user/' + thread.id +'/fetch_users/')
                    .then(response => response.json())
                    .then((data)=>{

                        console.log(data, "user data ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^666")
                          
                            data.forEach((d)=>{
                        //       if ()
                        //       {
                        //         threadLikes.push(d.fields.image)
                        //         setThreadLikes(threadLikes)
                        //       }
                        //     })
                        //     localStorage.setItem("thread_likes",threadLikes)
                      
                        //     console.log(threadLikes,"thread likes from likes function state variable")
                            
                        //   })
                      console.log(d.pk,"d.pk")
                      
                    comment.map((c)=>{
                        console.log(c.created_by,"c.created_by")
                        if (d.fields.email==c.created_by){
                            console.log("inside setting image")
                            c.image = d.fields.image
                            // c.image = "/static/user_images/ADoctorAHealer.jpg"
                        }
                    })
                    // setComment(comment)
                    reply.map((r)=>{
                        if (d.pk==r.fields.created_by){
                            r.fields.image = d.fields.image
                        }
                    })
                    console.log(comment, "comment after adding image")
                    console.log(reply, "reply after adding image")

                    comment.map((c)=>{
                        console.log(c.image,"image from user,_____________________________________")
                    })
                    // setUserList(data)
                })
                    })}

    }, [thread, comment, reply])


    const likedpost = (e) => {
           
        console.log("Liked Post", e.target.id)
        var base_url1 = '/blog/api/blog/' + e.target.id + '/update_thread/'
        var base_url2 = '/blog/api/threadLikes/'
        var data1 = []
        var data2 = []

        thread.likes = thread.likes + 1
                    // setLiked(!liked)
                    data1 = {
                        title: thread.title,
                        content: thread.content,
                        created_by: thread.created_by,
                        duration: thread.duration,
                        likes: thread.likes
                    }  

        data2 = {
            liked_by: user_id,
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
                    // if (!threadLikes.includes(e.target.id))
                    // {
                    //     threadLikes.push(e.target.id)
                    // }
                    // console.log(threadLikes,'Pushed')
                    // localStorage.setItem('thread_likes',threadLikes)
                    // console.log(localStorage.getItem("thread_likes"), "value from local storage inside likes")

                    //  console.log(res, "***********************likes_result") 
                setThreadLikes([])
                fetch('/blog/api/threadLikes/' + user_id +'/list_user_thread_likes_/')
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
            })    
        })
    }

    const likedcomment = (e) => {
           
        console.log("Liked comment", e.target.id)
        var base_url1 = '/blog/api/comment/' + e.target.id + '/update_comment/'
        var base_url2 = '/blog/api/commentLikes/'
        var data1 = []
        var data2 = []

        console.log(comment, "comments before looping 2")
        comment.forEach((c)=>{
            if (c.id == e.target.id)
            {
                c.likes = c.likes + 1
                data1 = {
                    thread_id: c.thread_id,
                    content: c.content,
                    created_by: c.created_by,
                    likes: c.likes
                } 
            }
        })
        console.log(data1, "data1")
        data2 = {
            liked_by: user_id,
            comment_id: e.target.id
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
                fetch(base_url2, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data2)
                })
                .then(res => {
                    // if (!threadLikes.includes(e.target.id))
                    // {
                    //     threadLikes.push(e.target.id)
                    // }
                    // console.log(threadLikes,'Pushed')
                    // localStorage.setItem('thread_likes',threadLikes)
                    // console.log(localStorage.getItem("thread_likes"), "value from local storage inside likes")

                    //  console.log(res, "***********************likes_result") 
                setCommentLikes([])
                fetch('/blog/api/commentLikes/' + user_id +'/list_user_comment_likes_/')
                .then(response => response.json())
                .then((data)=>{
                  console.log(data, "comment likes from liked function api")
                //   setThreadLikes(data)
                  data.forEach((d)=>{
                    if (!commentLikes.includes(d.fields.comment_id))
                    {
                        commentLikes.push(d.fields.comment_id)
                      setCommentLikes(commentLikes)
                    }
                  })
                  console.log(commentLikes,"comment likes from likes function state variable") 
                })
                // setloadingThreadLikes(true)
            })    
        })
    }

    const unlikedcomment = (e) => {
           
        // console.log("Unliked Post", e.target.id)
        var base_url1 = '/blog/api/comment/' + e.target.id + '/update_comment/'
        // var base_url2 = '/blog/api/commentLikes/'
        var data1 = []
        var data2 = []

        console.log(comment, "comments before looping 2")
        comment.forEach((c)=>{
            if (c.id == e.target.id)
            {
                c.likes = c.likes - 1
                data1 = {
                    thread_id: c.thread_id,
                    content: c.content,
                    created_by: c.created_by,
                    likes: c.likes
                } 
            }
            console.log(data1, "data1")
        })
    
        data2 = {
            liked_by: user_id,
            comment_id: e.target.id
        }
        console.log(data2, "data2")

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
                var delete_id = ""
                fetch('/blog/api/commentLikes/')
                .then((result) => result.json())
                .then((res) => {
                    console.log(res,'Unliked Comments')

                    res.map((r)=>
                    {
                        if(r.liked_by == user_id && commentLikes.includes(r.comment_id))
                        {
                            delete_id=r.id
                            // entryPresent.pop(r.thread_id)
                            // console.log(entryPresent,'Poped')
                            // localStorage.setItem('thread_likes_id',entryPresent)
                        }
                    })

                    //Delete Part
                    var base_url2 = '/blog/api/commentLikes/'+delete_id

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
                        //  console.log(res, "***********************unliked_result") 
                         setCommentLikes([])
                         fetch('/blog/api/commentLikes/' + user_id +'/list_user_comment_likes_/')
                         .then(response => response.json())
                         .then((data)=>{
                           console.log(data, "comment likes from unliked api")
                        //    setThreadLikes(data)
                           data.forEach((d)=>{
                            if (!commentLikes.includes(d.fields.comment_id))
                            {
                                commentLikes.push(d.fields.comment_id)
                            }
                           })
                        //    localStorage.setItem("thread_likes",threadLikes)
                        //    setThreadLikes(threadLikes)
                           console.log(commentLikes,"comment likes from un-likes func state variable") 
                         })
                        // setloadingThreadLikes(true)
        // window.location.reload(true);
        // setVisible(true)
    }


    const likedreply = (e) => {
           
        console.log("Liked comment", e.target.id)
        var base_url1 = '/blog/api/reply/' + e.target.id + '/update_reply/'
        var base_url2 = '/blog/api/replyLikes/'
        var data1 = []
        var data2 = []

        reply.forEach((r)=>{
            if (r.pk == e.target.id)
            {
                r.fields.likes = r.fields.likes + 1
                data1 = {
                    comment_id: r.fields.comment_id,
                    content: r.fields.content,
                    created_by: r.fields.created_by,
                    likes: r.fields.likes
                } 
            }
        })
        console.log(data1, "data1")
        data2 = {
            liked_by: user_id,
            reply_id: e.target.id
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
                fetch(base_url2, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data2)
                })
                .then(res => {
                setReplyLikes([])
                fetch('/blog/api/replyLikes/' + user_id +'/list_user_reply_likes_/')
                .then(response => response.json())
                .then((data)=>{
                  console.log(data, "reply likes from liked function api")
                //   setThreadLikes(data)
                  data.forEach((d)=>{
                    if (!replyLikes.includes(d.fields.reply_id))
                    {
                        replyLikes.push(d.fields.reply_id)
                      setReplyLikes(replyLikes)
                    }
                  })
                //   localStorage.setItem("thread_likes",threadLikes)
            
                  console.log(replyLikes,"reply likes from likes function state variable")  
                })
                // setloadingThreadLikes(true)
            })   
        })
    }

    const unlikedreply = (e) => {
           
        // console.log("Unliked Post", e.target.id)
        var base_url1 = '/blog/api/reply/' + e.target.id + '/update_reply/'
        // var base_url2 = '/blog/api/commentLikes/'
        var data1 = []
        var data2 = []

        reply.forEach((r)=>{
            if (r.pk == e.target.id)
            {
                r.fields.likes = r.fields.likes - 1
                data1 = {
                    comment_id: r.fields.comment_id,
                    content: r.fields.content,
                    created_by: r.fields.created_by,
                    likes: r.fields.likes
                } 
            }
            console.log(data1, "data1 from unliked")
        })
    
        data2 = {
            liked_by: user_id,
            reply_id: e.target.id
        }
        console.log(data2, "data2")

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
                var delete_id = ""
                fetch('/blog/api/replyLikes/')
                .then((result) => result.json())
                .then((res) => {
                    console.log(res,'Unliked replies')

                    res.map((r)=>
                    {
                        if(r.liked_by == user_id && replyLikes.includes(r.reply_id))
                        {
                            delete_id=r.id
                            // entryPresent.pop(r.thread_id)
                            // console.log(entryPresent,'Poped')
                            // localStorage.setItem('thread_likes_id',entryPresent)
                        }
                    }
                    )

                    //Delete Part
                    var base_url2 = '/blog/api/replyLikes/'+delete_id

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
                        //  console.log(res, "***********************unliked_result") 
                         setReplyLikes([])
                         fetch('/blog/api/replyLikes/' + user_id +'/list_user_reply_likes_/')
                         .then(response => response.json())
                         .then((data)=>{
                           console.log(data, "reply likes from unliked api")
                        //    setThreadLikes(data)
                           data.forEach((d)=>{
                            if (!replyLikes.includes(d.fields.reply_id))
                            {
                                replyLikes.push(d.fields.reply_id)
                           
                            }
                           })
                        //    localStorage.setItem("thread_likes",threadLikes)
                        //    setThreadLikes(threadLikes)
                           console.log(replyLikes,"comment likes from un-likes func state variable")
                           
                         })
                        // setloadingThreadLikes(true)          
        // window.location.reload(true);
        // setVisible(true)
        
    }

    const alertpost = (e) => {
        alert('Please Log in')
    }

    const unlikedpost = (e) => {
        var base_url1 = '/blog/api/blog/' + e.target.id + '/update_thread/'
        
        var data1 = []
        var data2 = []

        thread.likes = thread.likes - 1
                // setLiked(!liked)
                data1 = {
                    title: thread.title,
                    content: thread.content,
                    created_by: thread.created_by,
                    duration: thread.duration,
                    likes: thread.likes
                }

        data2 = {
            liked_by: user_id,
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
                var delete_id = ""
                fetch('/blog/api/threadLikes/')
                .then((result) => result.json())
                .then((res) => {
                    console.log(res,'Unliked Threads')

                    res.map((r)=>
                    {
                        if(r.liked_by == user_id && threadLikes.includes(r.thread_id))
                        {
                            delete_id=r.id
                            // entryPresent.pop(r.thread_id)
                            // console.log(entryPresent,'Poped')
                            // localStorage.setItem('thread_likes_id',entryPresent)
                        }
                    }
                    )

                    //Delete Part
                    var base_url2 = '/blog/api/threadLikes/'+delete_id

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
                        //  console.log(res, "***********************unliked_result") 
                         setThreadLikes([])
                         fetch('/blog/api/threadLikes/' + user_id +'/list_user_thread_likes_/')
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
        // window.location.reload(true);
        // setVisible(true)
        
    }

    const saveComment=(e)=>{
        setVisible(true)
        setCommentText(e.target.value)
        console.log(commentText, "comment text")
    }

    const postComment=(e)=>{
        var base_url = '/blog/api/comment/create_comment/'
        var data = []
        data = {
            thread_id: thread.id,
            content: commentText,
            created_by: user_id,
        }

        fetch(base_url,{
            method: "POST",
            headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          // .then(res=>{console.log(JSON.stringify(res), "***********************result")})
          .then(response => response.json())
          .then(data => {console.log(data, "comment response")
          alert("comment added")
          setCommentText("")
          window.location.reload(false);
        })
       
    }

    const EditComment=(e)=>{

        comment.forEach((c)=>{
                if (e.target.id == c.id)
                {
                    setCommentToggle(e.target.id)
                }
        })   
    }

    const UpdateComment=(e)=>{

        setUpdatecomment(e.target.value)
    }

    const postUpdatedComment=(e)=>{
        var base_url = '/blog/api/comment/' + e.target.id +'/update_comment/'
        var data = []
        data = {
            thread_id: thread.id,
            content: updatecomment,
            created_by: user_id,
        }
        console.log(data, "post updated comment data")
        fetch(base_url,{
            method: "PUT",
            headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          // .then(res=>{console.log(JSON.stringify(res), "***********************result")})
          .then(response => response.json())
          .then(data => {console.log(data, "comment update response")
          setCommentToggle("")
          window.location.reload(false);
        })
    }

    const deleteComment=(e)=>{
        var base_url = "/blog/api/comment/" + e.target.id + "/delete_comment/"
        fetch(base_url, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            // body: JSON.stringify(data2)
        })
        .then(res => {
             console.log(res, "***********************deleted comment")
             window.location.reload(false);
             })
    }

    const replyTo=(e)=>{

        comment.forEach((r)=>{
            if (e.target.id == r.id)
            {
                setReplyToggle(e.target.id)
            }
        })
    }

    const saveReply=(e)=>{
    
        setReplyText(e.target.value)
        console.log(replyText, "reply text")
    }

    const postReply=(e)=>{
        var base_url = '/blog/api/reply/create_reply/'
        var data = []
        data = {
            comment_id: e.target.id,
            content: replyText,
            created_by: user_id,
            reply_to: user_id,
        }

        fetch(base_url,{
            method: "POST",
            headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          // .then(res=>{console.log(JSON.stringify(res), "***********************result")})
          .then(response => response.json())
          .then(data => {console.log(data, "reply response")
          setReplyText("")
          window.location.reload(false);
        })
       
    }

    const EditReply=(e)=>{

        reply.forEach((r)=>{
                if (e.target.id == r.pk)
                {
                    setReplyEditToggle(e.target.id)
                }
        })   
    }

    const UpdateReply=(e)=>{

        setReplyText(e.target.value)
    }

    const postUpdatedReply=(e)=>{
        var base_url = '/blog/api/reply/' + e.target.id +'/update_reply/'
        var data = []
        var a = ""
        reply.forEach((r)=>{
            if (r.pk==e.target.id){
                a = r.fields.comment_id
            }
        })

        console.log(e.target.key, "e.target.key")
        data = {
            comment_id: a,
            content: replyText,
            created_by: user_id,
            reply_to: user_id,
        }
        console.log(data, "post updated comment data")
        fetch(base_url,{
            method: "PUT",
            headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          // .then(res=>{console.log(JSON.stringify(res), "***********************result")})
          .then(response => response.json())
          .then(data => {console.log(data, "comment update response")
          setReplyToggle("")
          setReplyText("")
          window.location.reload(false);
        })
    }

    const DeleteReply =(e)=>{
        var base_url = "/blog/api/reply/" + e.target.id + "/delete_reply/"
        fetch(base_url, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            // body: JSON.stringify(data2)
        })
        .then(res => {
             console.log(res, "***********************deleted reply")
             window.location.reload(false);
             })
    }

    const htmlInput = thread.content;
    const htmlToReactParser = new Html2ReactParser();
    const reactElement = htmlToReactParser.parse(htmlInput);

    return (
        <Container>
            {/* <Navbar {...props} user={user}/> */}
            
            <br />
            <br />
            <br />
            <br />
            <div className="w3-card-4 w3-margin w3-white" style={{ border: "2px solid black", margin: "500px", align: "center" }}>
                <img src={thread.image} data="image/jpg;base64,iVBOR...." alt="Nature" style={{ width: '50%', marginTop: '20px' }} />
                <div className="w3-container">
                    <h2><b>{thread.title}</b></h2>
                    <h4 ><span className="w3-opacity">{thread.created_at}</span></h4>
                    <div align="center">
                        <hr style={{
                            marginLeft: 5,
                            marginRight: 5,
                            height: "1px",
                            backgroundColor: "grey",
                            width: '30vh'
                        }} />
                    </div>
                </div>

                <div className="w3-container" align="left">
                    <Typography variant="h4" style={{ margin: "20px" }}>
                        {reactElement}
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

                            {/* <a href="https://www.facebook.com/SportsMedicineDoctor/" target="_blank" style={{ margin: "10px" }}><AiOutlineFacebook size="30" /></a> */}
                            <FacebookShareButton style={{margin:"5px"}}
                                url="https://www.sportsmedicinedoctor.in/post/when-is-snacking-good-for-you">
                                <FacebookIcon size="35" round/>
                            </FacebookShareButton>

                            {/* <a href="https://twitter.com/sportsdocindia" target="_blank" style={{ margin: "10px" }}><AiFillTwitterCircle size="30" /></a> */}
                           
                            <TwitterShareButton style={{margin:"5px"}}
                                url="https://www.sportsmedicinedoctor.in/post/when-is-snacking-good-for-you">
                                <TwitterIcon size="35" round />
                            </TwitterShareButton>

                            {/* <a href="https://www.linkedin.com/in/sportsmedicinedoctor/" target="_blank" style={{ margin: "10px" }}><AiFillLinkedin size="30" /></a> */}
                            <LinkedinShareButton style={{margin:"5px"}}
                                url="https://www.sportsmedicinedoctor.in/post/when-is-snacking-good-for-you">
                                <LinkedinIcon size="35" round/>
                            </LinkedinShareButton>
                        
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
                            {/* <FavoriteBorderRounded id={thread.id} className='thread' onClick={likedPost} /> */}
                            {
                                email==null?<FavoriteBorderRounded onClick={alertpost} />:
                                email!="undefined"? 

                                threadLikes.includes(thread.id)?
                                    <FavoriteBorderRounded  style={{color:"red"}} id={thread.id} onClick={unlikedpost} />:<FavoriteBorderRounded id={thread.id} onClick={likedpost} />
                                    :<FavoriteBorderRounded onClick={alertpost} />
                            }

                            
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

                {/* <Grid container>
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
                }} /> */}
                <div>
                    <Grid container spacing={1} alignItems="flex-end" style={{ margin: '50px' }}>
                        
                        <Grid item>
                            {user_image!=null?<Avatar src={user_image}/>:<Avatar />}
                            
                        </Grid>
                        <Grid item style={{ marginLeft: "20px" }}>
                            <TextField id="input-with-icon-grid" label="Write a comment" style={{width:"40vw"}} onChange={ saveComment } value={commentText}
                            />
                            {visible == true ? email!="undefined"? <Button style={{cursor:"pointer"}} onClick={postComment}>
                                Post
                            </Button> :<LoginHooks/>
                            :null
                               }
                            {/* <Button onClick={()=>post_data()} >Post</Button> */}
                            {/* {console.log(currentUser,"CurrentUser")} */}
                        </Grid>
                    </Grid>

                    {
                        comment.map((m) =>
                            // m.thread_id==4?
                            <div>
                                <Grid  container style={{ marginLeft: '50px' }}>
                                    <Grid xs={12} sm={1} item>
                                        <Avatar alt="" src = {String(m.image)} />
                                        {/* <Avatar alt="" src={} /> */}
                                    </Grid>
                                    <Grid xs={12} sm={8} item align="left" class="user_details">
                                        <Typography>
                                            {m.user_who_replied}
                                        </Typography>
                                        <Typography variant="subtitle2" className="w3-opacity">
                                            {m.created_at}
                                        </Typography>
                                    </Grid>
                                    {localStorage.getItem("id")==m.created_by?
                                            <Grid xs={12} sm={1} item>
                                            <div class="dropdown">
                                            <button class="dropbtn"><SettingsIcon fontSize="large"/></button>
                                                    <div class="dropdown-content" style={{backgroundColor:"white"}}>
                                                    <button style={{border:"none", backgroundColor:"white", color:"black", fontSize:"15px",fontWeight:"500", marginBottom:"0px", paddingBottom:"0px"}} id = {m.id} onClick={EditComment}>Edit</button> <hr />
                                                   <button style={{border:"none", backgroundColor:"white", color:"black", fontSize:"15px",fontWeight:"500", marginTop:"0px", paddingTop:"0px"}} id = {m.id} onClick={deleteComment}>Delete</button>
                                                </div>
                                            </div>
                                        </Grid>:null
                                    }
                                    
                                </Grid>
                                <Grid container style={{ marginLeft: '50px', marginTop: "20px" }}>
                                   {CommentToggle==m.id?<div><input type="text" defaultValue={m.content}  onChange={UpdateComment}/>
                                   <Button style={{marginLeft:"50px"}} id ={m.id} onClick={postUpdatedComment}>Save</Button></div>
                                   :
                                    <div>{m.content}</div>
                                   }
                                </Grid>


                                <Grid container style={{ marginLeft: "20px", marginTop: "20px" }}>
                                    <Box px={2} pb={2} mt={-1}>

                                        <IconButton>
                                        {
                                            email==null?<FavoriteBorderRounded onClick={alertpost} />:
                                            email!="undefined"? 

                                            commentLikes.includes(m.id)?
                                                <FavoriteBorderRounded  style={{color:"red"}} id={m.id} onClick={unlikedcomment} />:<FavoriteBorderRounded id={m.id} onClick={likedcomment} />
                                                :<FavoriteBorderRounded onClick={alertpost} />
                                        }
                                        </IconButton>
                                        {/* Like  */}
                                        {m.likes > 0 ? m.likes : "Like"}
                                        <IconButton>
                                            <ChatBubbleOutlineIcon id={m.id} onClick={replyTo}/>
                                        </IconButton>
                                        Reply
                                    </Box>
                                </Grid>
                                <Grid container xs={12} style={{paddingBottom:"25px"}}>
                                    <Grid item xs={12} sm={1}></Grid>
                                    <Grid item xs={12} sm={3} class="reply_textfield">
                                    {m.id==replyToggle?
                                            <div><TextField id="input-with-icon-grid" label="Write a reply" style={{width:"20vh"}} onChange={ saveReply } value={replyText} />
                                            <Button id ={m.id} onClick={postReply}>Post</Button></div>
                                            :null
                                       } 
                                    </Grid>
                                   
                                </Grid>
                                        <br />
                                {
                                    reply.map((r) =>
                                        r.fields.comment_id == m.id ?
                                            <div style={{ borderLeft: "1px solid grey", marginLeft: "100px" }}>
                                                <Grid container xs={12} sm={2} style={{ marginLeft: '50px' }}>
                                                    <Grid item>
                                                        <Avatar alt="Remy Sharp" src={String(r.fields.image)} />
                                                    </Grid>
                                                    <Grid item xs={12} sm={7} style={{ marginLeft: "2vh" }}>
                                                        <Typography>
                                                            {/* Dr. Bharat Kumar B */}
                                                            {r.fields.user_who_replied}
                                                        </Typography>
                                                        <Typography variant="subtitle2" className="w3-opacity">
                                                            {/* 18th June, 2021 */}
                                                            {r.fields.created_at}
                                                        </Typography>
                                                    </Grid>
                                                    {user_id==r.fields.created_by?
                                                                <Grid xs={12} sm={1} item>
                                                                <div class="dropdown">
                                                                        <button class="dropbtn" style={{marginLeft:"67vh"}}><SettingsIcon fontSize="large"/></button>
                                                                        <div class="dropdown-content" style={{backgroundColor:"white",marginLeft:"67vh"}}>
                                                                        <button style={{border:"none", backgroundColor:"white", color:"black", fontSize:"15px",fontWeight:"500", marginBottom:"0px", paddingBottom:"0px"}} id = {r.pk} onClick={EditReply}>Edit</button> <hr /> 
                                                                    <button style={{border:"none", backgroundColor:"white", color:"black", fontSize:"15px",fontWeight:"500", marginTop:"0px", paddingTop:"0px"}} id = {r.pk} onClick={DeleteReply}>Delete</button>
                                                                    </div>
                                                                </div>
                                                            </Grid>:null
                                                        }
                                                </Grid>

                                                <Grid container style={{ marginLeft: '50px', marginTop: "20px" }}>
                                                    {replyEditToggle==r.pk?<div><input type="text" defaultValue={r.fields.content}  onChange={UpdateReply}/>
                                                    <Button style={{marginLeft:"50px"}} id ={r.pk} key={r.fields.comment_id} onClick={postUpdatedReply}>Save</Button></div>
                                                    :
                                                        <div>{r.fields.content}</div>
                                                    }
                                                </Grid>
{/*                                 
                                                <Grid container style={{ marginLeft: '50px', marginTop: "20px" }}>
                                                    {/* Yes, eating with the non dominant hand is difficult. But making it a practice once in a while helps us to focus on what we are eating. */}
                                                    {/* {r.fields.content} */}
                                                {/* </Grid> */} 

                                                <Grid container style={{ marginLeft: "20px", marginTop: "20px" }}>
                                                
                                                    <Box px={2} pb={2} mt={-1}>
                                                    <IconButton>
                                                {
                                                        email==null?<FavoriteBorderRounded onClick={alertpost} />:
                                                        email!="undefined"? 

                                                        replyLikes.includes(r.pk)?
                                                            <FavoriteBorderRounded  style={{color:"red"}} id={r.pk} onClick={unlikedreply} />:<FavoriteBorderRounded id={r.pk} onClick={likedreply} />
                                                            :<FavoriteBorderRounded onClick={alertpost} />
                                                    }
                                                    </IconButton>
                                                        {r.fields.likes > 0 ? r.fields.likes : "Like"}
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
//api's related to post comment to be written - done
//sorting based on oldest, newest to be done

//created_by has to show user name. Now it is showing id
//Avatar for all users who are part of thread, to be completed - need to figure out how ? (how to write API basically)
//likes api for comment and reply - from TEJAS

//sorting based on oldest, newest to be done - least priority

//15th july
//1. Formatting content added from django admin into blog
//2. Created_by has to show username
//3. api calling order for efficiently to be checked (way 1(nesting): put comments in .then of thread. 
//   Put replies in .then of comments)
