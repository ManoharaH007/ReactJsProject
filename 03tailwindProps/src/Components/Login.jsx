import React, { useState } from "react";
import {
  Box,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      return;
    }
   
    console.log("Logged in with:", { email, password });
  };

  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: " rgb(38,19,500)",
        width: "100%",
        background: "linear-gradient(210deg, rgba(500,100,500,100) 0%, rgba(142,255,252,1) 96%)",
        height: "100vh",
        padding: { xs: "8px", sm: "16px" },
         boxShadow: '2px 2px 5px rgba(10, 50, 100, 0.8)'
      }}
    >
         
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
        sx={{
          borderRadius: 2,
          padding: { xs: "16px", sm: "24px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          
          }}
        >
           <img src="images\Logo.png" alt="Logo" style={{ width: "100px",height:'80px' }} />
          <Typography
            component="h1"
            variant="h5"
            id="heading"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
             Login 
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              error={emailError}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              autoComplete="email"
              autoFocus
              aria-label="Enter your username"
              sx={{
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  height: "48px",
                },
                "& .MuiOutlinedInput-root:hover fieldset": {
                  borderColor: "#4a8d73",
                },
                "& .MuiOutlinedInput-input": {
                  lineHeight: "48px",
                  fontSize: "15px",
                },
              }}
            />

            <Box sx={{ position: "relative" }}>
              <TextField
                error={passwordError}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                aria-label="Enter your password"
                sx={{
                  boxShadow: "4px 4px 6px rgba(2, 2, 2, 0.10)",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    height: "48px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "0",
                    lineHeight: "55px",
                    fontSize: "15px", // Fixed font size for readability
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "#4a8d73",
                  },
                }}
              />
              <Box
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  position: "absolute",
                  top: "60%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#4a8d73",
                  "&:hover": {
                    color: "#00695c",
                  },
                }}
              >
                {showPassword ? <LockOpenIcon /> : <LockIcon />}
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  
                  width: "48%",
                  color: "white",
                  borderRadius: "9px",
                  fontWeight: 800,
                  padding: "10px",
                  height: "35px",
                  fontWeight: "bold",
                  textTransform: "none",
                  
                 
                }}
              >
                Login
              </Button>
            </Box>

            <Grid container justifyContent="space-between" sx={{ mt: 3 }}>
              <Link
                href="/forgot-password"
                variant="body2"
                sx={{
                  color: "#bc4848",
                  fontSize: "12px",
                  "&:hover": {
                    color: "#4a8d73",
                  },
                }}
              >
                Forgot Password?
              </Link>
              <Link
                href="/register"
                variant="body2"
                sx={{
                  color: "#4a4a4a",
                  fontSize: "12px",
                  "&:hover": {
                    color: "#4a8d73",
                  },
                }}
              >
                Don't have an account? <span>Register</span>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
