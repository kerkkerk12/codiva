import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import auth, { signInWithEmailAndPassword } from "./Firebase";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Card sx={{ maxWidth: 600 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
          alt="swensen"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 70,
            right: 30,
            width: "150%",
            color: "white",
            padding: "10px",
          }}
        >
          <Typography variant="h4">ยินดีต้อนรับ</Typography>
          <Typography variant="h8">เข้าสู่ระบบเพื่อใช้งาน</Typography>
        </Box>
      </Box>

      <CardContent>
        <label class="title2">อีเมล</label>
        <div class="you">
          <Box sx={{ width: 480, maxwidth: "100%" }}>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              fullWidth
              focused
              defaultValue=""
              placeholder="กรอกอีเมล"
            />
          </Box>
        </div>
        <label class="title2">รหัสผ่าน</label>
        <div class="you">
          <Box sx={{ width: 480, maxwidth: "100%" }}>
            <TextField
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              fullWidth
              focused
              defaultValue=""
              placeholder="กรอกรหัสผ่าน"
            />
            <button onClick={() => setShowPassword((s) => !s)}>
              กดเพื่อดูรหัสผ่าน
            </button>
          </Box>
        </div>

        <button
          class="btn btn-primary"
          onClick={(e) => {
            handleClick(e);
          }}
          type="submit"
        >
          เข้าสู่ระบบ
        </button>
      </CardContent>
    </Card>
  );
}

export default Login;
