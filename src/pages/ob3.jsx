import React from "react";

import ob3img from "assets/ob3img.svg";
import slider3 from "assets/Slider3.svg";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 42px",
        paddingTop: "60px",
    },
    heading: {
        fontSize: "32px",
        lineHeight: "38px",
        letterSpacing: "0.02em",
        margin: "0 0 40px 0",
    },
    content: {
        fontSize: "14px",
        lineHeight: "140%",

        letterSpacing: "0.01em",
    },
});

const OB2 = () => {
    const c = useStyles();
    const history = useHistory();
    return (
        <div className={c.root}>
            <img src={ob3img} alt="" />
            <div>
                <div className={c.heading}>Get yout own unique ID</div>
                <div className={c.content}>
                    With your own UniChain ID, authenticate yourself anywhere
                    around the world.
                </div>
            </div>
            <img
                style={{
                    alignSelf: "baseline",
                    marginTop: "50px",
                    position: "absolute",
                    bottom: "150px",
                }}
                src={slider3}
                alt=""
            />
            <div
                style={{
                    alignSelf: "flex-end",
                    marginTop: "50px",
                    position: "absolute",
                    bottom: "100px",
                }}
            >
                <Button
                    onClick={() => {
                        // do something to remove onboarding
                        history.push("/");
                        localStorage.setItem("firstTime", "abc");
                    }}
                    style={{ color: "#fbfbfb" }}
                    variant="text"
                >
                    Skip
                </Button>
                <Button
                    onClick={() => {
                        history.push("/");
                        localStorage.setItem("firstTime", "abc");
                    }}
                    variant="contained"
                    color="primary"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default OB2;
