import * as React from "react";
import Lottie from "lottie-react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import { Button, Card, Divider, Typography } from "@mui/joy";
import loginDark from "../../assets/animations/login-animation-dark.json";
import loginLight from "../../assets/animations/login-animation.json";
import FormInput from "../../components/FormInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthInputs } from "../../interface";
const Item = styled(Sheet)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.vars.palette.text.secondary,
}));

const Register = () => {

const dispatch=useDispatch<AppDispatch>()

const  {themeMode} =useSelector((state:RootState)=>state.themeState)

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm<AuthInputs>()
const onSubmit: SubmitHandler<AuthInputs> = (data) => {
console.log(data)
}

  return (
    <Grid container sx={{mt:5,pt:5}}>
      <Grid xs={12} md={6} lg={5} sx={{mx:'auto'}}>
        <Card>
          <Grid container spacing={1} sx={{alignItems:'center',position:'relative',justifyContent:'space-between'}}>
            <Grid xs={12} sm={6}>
              <Item>
                <Lottie
                  animationData={themeMode==="dark"?loginDark:loginLight}
                  loop={true}
                  className="login-animation"
                />
              </Item>
            </Grid>
            <Divider orientation="vertical" className='vr' sx={{display:{xs:'none',sm:'flex'}}} />
            <Divider orientation="horizontal" className='hr' sx={{display:{sx:'felx',sm:'none'}}} />
            <Grid xs={12} sm={6}>
              <Item>
                <Typography level='h2' sx={{pb:3,color:themeMode==='dark'?"white":"#007FFF"}}>Register</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormInput
                    name="name"
                    label="Name"
                    placeholder="Enter Name"
                    type="text"
                    required={true}
                    register={register}
                    error={Boolean(errors.name)}
                    startDecorator={null}
                    endDecorator={null}
                    sx={{ mb: 2 }}
                  />
                  <FormInput
                    name="email"
                    label="Email"
                    placeholder="Enter Name"
                    type="email"
                    required={true}
                    register={register}
                    error={Boolean(errors.email)}
                    startDecorator={null}
                    endDecorator={null}
                    sx={{ mb: 2 }}
                  />
                  <FormInput
                    name="password"
                    label="Password"
                    placeholder="Create password"
                    type="password"
                    required={true}
                    register={register}
                    error={Boolean(errors.password)}
                    startDecorator={null}
                    endDecorator={null}
                    sx={{ mb: 2 }}
                  />
                  <Button type="submit" sx={{width:'100%'}} variant="solid">Register</Button>
                  <Typography sx={{mt:5}}>
                    Already have an account? <Link to='/login' className="link">Login</Link>
                  </Typography>
                </form>
              </Item>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register;
