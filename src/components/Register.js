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
import Button from "@mui/material/Button";


function Register() {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [val, setChange] = useState("hello")
  const handleChange = (event) => {
    setChange(event.target.value);
  };
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
            bottom: 70,
            right: 30,
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
      <CardContent>
        <div class="seper">
          <TextField onChange ={handleChange} required focused defaultValue="" placeholder="กรอกชื่อ" />
          <TextField
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
        <FormControl>
          <label class="title3">เพศ (ไม่ระบุได้)</label>
          <RadioGroup
            row
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
        <label class="title3">ของขวัญวันเกิดรอคุณอยู่</label>
        <div class="you">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              fullWidth
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ฉันได้อ่านและยอมรับ ข้อกำหนดการใช้งาน และ นโยบายความเป็นส่วนตัว ของสเวนเซ่นส์"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และบริษัทในเครือ โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง นโยบายความเป็นส่วนตัว เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ"
          />
        </FormGroup>
        <Button variant="contained" onClick={() => alert(val)}>สมัครสมาชิก</Button>
      </CardContent>
    </Card>
  );
}

export default Register;
