import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

function Register() {
  const value = React.useState(dayjs("2014-08-18T21:11:54"));
  const [showPassword, setShowPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email, password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then( (res) => {
        const user = res.user;
        console.log(user);
        // setCurrentUser(true);
      })
      .catch((err) => alert(err));
  };
  if (currentUser) {
    return <Navigate replace to="/dashboard" />;
  }
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
          <Typography variant="h4">สร้างบัญชี</Typography>
          <Typography variant="h8">สมัครสมาชิก และ เริ่มต้นใช้งาน</Typography>
        </Box>
      </Box>
      <label class="title1">ชื่อ</label>
      <label class="title1">นามสกุล</label>
      <form onSubmit={handleSubmit} name="registration_form">
        <CardContent>
          <div class="seper">
            <TextField
              name="firstname"
              required
              focused
              defaultValue=""
              placeholder="กรอกชื่อ"
            />
            <TextField
              name="lastname"
              required
              defaultValue=""
              focused
              placeholder="กรอกนามสกุล"
            />
          </div>
          <label class="title2">เบอร์โทรศัพท์</label>
          <div class="you">
            <Box sx={{ width: 480, maxwidth: "100%" }}>
              <TextField
                name="number"
                required
                fullWidth
                focused
                defaultValue=""
                placeholder="กรอกเบอร์โทรศัพท์"
              />
            </Box>
          </div>
          <label class="title2">อีเมล</label>
          <div class="you">
            <Box sx={{ width: 480, maxwidth: "100%" }}>
              <TextField
                name="email"
                required
                fullWidth
                focused
                placeholder="กรอกอีเมล"
              />
            </Box>
          </div>
          <div class="pass">รหัสผ่าน</div>
          <div class="you">
            <Box sx={{ width: 480, maxwidth: "100%" }}>
              <TextField
                name="password"
                type={showPassword ? "text" : "password"}
                class="boxpass"
                required
                fullWidth
                focused
                defaultValue=""
                placeholder="กรอกรหัสผ่าน"
              />
            </Box>
            <button
              class="btn btn-danger"
              onClick={() => setShowPassword((s) => !s)}
            >
              กดเพื่อดูรหัสผ่าน
            </button>
          </div>
          <FormControl>
            <label class="title3">เพศ (ไม่ระบุได้)</label>
            <RadioGroup
              row
              class="title3"
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="ผู้หญิง"
              />
              <FormControlLabel value="male" control={<Radio />} label="ชาย" />
              <FormControlLabel
                value="not speci"
                control={<Radio />}
                label="ไม่ระบุ"
              />
            </RadioGroup>
          </FormControl>
          {/* <label class="title3">ของขวัญวันเกิดรอคุณอยู่</label>
          <div class="you">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                fullWidth
                inputFormat="MM/DD/YYYY"
                value={value}
                // onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div> */}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="ฉันได้อ่านและยอมรับ ข้อกำหนดการใช้งาน และ นโยบายความเป็นส่วนตัว ของสเวนเซ่นส์"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และบริษัทในเครือ โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง นโยบายความเป็นส่วนตัว เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ"
            />
          </FormGroup>
          <button class="btn btn-primary" type="submit">
            สมัครสมาชิก
          </button>
        </CardContent>
      </form>
    </Card>
    
  );
}

export default Register;
