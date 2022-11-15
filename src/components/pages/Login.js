import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


function Login() {

  const [showPassword, setShowPassword] = useState(false);

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
            top: 30,
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
              class="boxpass"
              required
              fullWidth
              focused
              defaultValue=""
              placeholder="กรอกรหัสผ่าน"
            />
          </Box>
            <button class="btn btn-danger" onClick={() => setShowPassword((s) => !s)}>
              กดเพื่อดูรหัสผ่าน
            </button>
        </div>
        

        <button class="btn btn-primary" type="submit">เข้าสู่ระบบ</button>
      </CardContent>
    </Card>
  );
}

export default Login;
