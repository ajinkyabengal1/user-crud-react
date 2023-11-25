import React from "react";
import Lottie from "lottie-react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import loginDark from "../../assets/animations/login-animation-dark.json";
import loginLight from "../../assets/animations/login-animation.json";
import { Card, Grid } from "@mui/joy";
import FormInput from "../../components/FormInput";
const Login = () => {
  const Item = styled(Sheet)(({ theme }) => ({
    // backgroundColor:
    //   theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
    // ...theme.typography["body-sm"],
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
  }));
  return (
    <Card>
      <Grid container>
        <Grid xs={12} sm={6}>
          <Item>
          <Lottie animationData={loginDark} loop={true} className="login-animation" />
          </Item>
        </Grid>
        <Grid xs={12} sm={6}>
          <Item>
            <FormInput
            name='name'
            label='Name'
            type='text'
            placeholder="Enter Name"
            required={true}
            sx={{mb:1}}
            register={()=>{}}
            />
          </Item>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Login;
