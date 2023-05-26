import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./achievements.css";
import Modal from '@material-ui/core/Modal';
import diploma from "./assets/diploma.jpg";
import pd from "./assets/pd.jpg";
import bachelordegree from "./assets/bachelordegree.jpg";
import msc from './assets/msc.jpeg';
import sai from './assets/sai.jpeg';
import msrit from './assets/msrit.png';
import nutri from './assets/nutri.png';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import { Container } from '@material-ui/core';
import { FaHeart } from "react-icons/fa";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    root: {
        maxWidth: 343,
        height: 400,
        borderRadius: 20,
        backgroundColor: "#ededeb",
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }
    },
    content: {
        padding: 24,
    },
    paper: {
        position: 'absolute',
        width: 1100,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Achievements(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })
    const styles = useN03TextInfoContentStyles();
    const shadowStyles = useLightTopShadowStyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [image, setImage] = React.useState("");


    const handleOpen = (img) => {
        setOpen(true);
        setImage(img);
    };

    const handleClose = () => {
        setOpen(false);
    };

    var credentials = [
        {
            heading: 'YOUR POSITIVE SPIRIT',
            body: "Just like everyone, this is something I respect and admire the most. Your way of thinking is quite rare to find. The world needs more of you :)",
            logo: sai,
            certificate: diploma
        },
        {
            heading: 'PEOPLE RELATIONSHIPS',
            body: "Your way of dealing with people and friends is so nice and reminds me of my dad who did it the same way. Never change this for anyone :)",
            logo: msrit,
            certificate: bachelordegree
        },
        {
            heading: 'LOGICAL NATURE',
            body: "Its so inspiring sometimes when I see you acting purely out of logic and it leaves me wondering how you do it so easily :p while I keep getting lost in emotions..lol!",
            logo: nutri,
            certificate: pd
        },
        {
            heading: 'SO CARING AND LOVING',
            body: "You always give to others. There is so much I have got from you, and I value it with all my heart. Thank you for all the love. Not sure if I can ever do so much as you have done for me",
            logo: msc,
            certificate: "",
        }
    ]


    return (
        <div>

            <div class="headings" style={{ marginTop: '10vh', fontFamily: "Comfortaa" }}><u>What makes you so special ?</u></div>

            <Container  >
                {
                    credentials.map((cred, i) =>

                        <div>

                            <Grid container alignItems="left">

                                <Grid item xs={12} sm={1}>
                                    <Typography class="icon" gutterBottom align="left" style={{ margin: "3vh" }}>
                                        <FaHeart />
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={10}>
                                    <Typography class="cred_head" gutterBottom align="left" style={{
                                        fontFamily: 'Comfortaa',
                                        margin: "3vh", fontWeight: "550"
                                    }}>
                                        {cred.heading} <br /> <div class="cred_body"><i>{cred.body}</i></div>
                                    </Typography>
                                </Grid>


                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    <div style={modalStyle} className={classes.paper}>
                                        <img src={image} width="100%" height="auto" style={{ position: "center" }} />
                                    </div>
                                </Modal>

                            </Grid>

                            <br />
                            <hr />
                        </div>
                    )
                }

            </Container>

            <br /><br />

        </div>
    );
}