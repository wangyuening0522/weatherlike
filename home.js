/* import { getWeather } from "./src/api";

getWeather().then((res) => {
    console.log("data", res);
  }); */
// const axios = require('axios');
/* import axios from './node_modules/axios'
axios.get('https://www.yiketianqi.com/free/day?appid=88344344&appsecret=fAh2sBq8')
.then(response => {
    console.log(response.data);
  }) */
/*   import request from "./src/utils/request";
  function getWeather(){
    request('',{
        method:"get",
    }).then((data)=>{
        console.log(data);
      })
  } */
// import {bian} from "./src/api/index"
/* bian=2;
console.log(bian); */
//首页温度
fetch("https://www.yiketianqi.com/free/day?appid=88344344&appsecret=fAh2sBq8")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let { tem, wea, humidity } = data;
    let temDiv = document.createElement("div");
    let temLiObj = {};
    let temLi;
    for (let i = 0; i < 4; i++) {
      temLi = document.createElement("li");
      temLiObj[i] = temLi;
      temLi.classList.add("temLi");
      temLi.classList.add(`temLi${i}`);
    }
    temLiObj[0].innerHTML = tem;
    temLiObj[1].innerHTML = wea;
    temLiObj[2].innerHTML = `湿度  ${humidity}`;
    temLiObj[3].innerHTML = "光芒透过云缝，洒向大地";
    for (let i = 0; i < 4; i++) {
      temDiv.appendChild(temLiObj[i]);
    }
    let page1 = document.querySelector(".page1");
    page1.appendChild(temDiv);
    temDiv.classList.add("tem");
  });
//获取逐时天气
fetch(
  "https://devapi.qweather.com/v7/weather/24h?location=101040100&key=33f8567845a84f458bc0d1b6e286328e"
)
  .then((response) => response.json())
  .then((data) => {
    let hourly = data.hourly;
    hourly.forEach((item) => {
      let { fxTime, temp } = item;
      console.log(fxTime, temp);
      let hourlyDiv = document.createElement("div");
      hourlyDiv.classList.add("hourly");
      // 原始时间戳
      const timestamp = fxTime;
      // 将字符串解析为Date对象
      const date = new Date(timestamp);
      // 获取小时和分钟
      const hours = date.getHours();
      const minutes = date.getMinutes();
      // 将小时和分钟拼接为指定格式的时间字符串
      const timeStr = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
      console.log(timeStr); // 输出: "16:00"
      //时间
      let timeStrDiv = document.createElement("div");
      timeStrDiv.classList.add("timeStr");
      timeStrDiv.innerHTML = timeStr;
      hourlyDiv.appendChild(timeStrDiv);
      // hourlyDiv.innerHTML = `${timeStr} ${temp}`;
      //图片
      let img = document.createElement("img");
      img.src = "./src/images/day/yun.png";
      img.classList.add("p3-img");
      hourlyDiv.appendChild(img);
      //温度
      let tempDiv = document.createElement("div");
      tempDiv.classList.add("tempDiv");
      tempDiv.innerHTML = temp;
      hourlyDiv.appendChild(tempDiv);
      let page3 = document.querySelector(".page3");
      page3.appendChild(hourlyDiv);
    });
    console.log(data);
  });
fetch(
  "https://www.yiketianqi.com/free/week?unescape=1&appid=88344344&appsecret=fAh2sBq8"
)
  .then((response) => response.json())
  .then((data2) => {
    let data = data2.data;
    data.forEach((item) => {
      let { date, wea, wea_img, tem_day, tem_night, win_speed } = data;
      let weekDiv = document.createElement("div");
      weekDiv.classList.add("weekDiv");
      let day = document.createElement("div");

      let night = document.createElement("div");
    });
  });
//获取生活指数
fetch(
  "https://devapi.qweather.com/v7/indices/1d?location=101040100&key=33f8567845a84f458bc0d1b6e286328e&type=0"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let page5 = document.querySelector(".page5");
    let daily = data.daily;
    for (let i = 0; i < 8; i++) {
      let { type, name, category } = daily[i];
      let dailyDiv = document.createElement("div");
      dailyDiv.classList.add("dailyDiv");
      // dailyDiv.innerHTML = `${type} ${name} ${category}`;
      page5.appendChild(dailyDiv);
      //图片
      let img = document.createElement("img");
      img.src = "./src/images/day/yun.png";
      img.classList.add("p4-img");
      dailyDiv.appendChild(img);
      //程度
      let categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category");
      categoryDiv.innerHTML = category;
      dailyDiv.appendChild(categoryDiv);
      //类型
      let nameDiv = document.createElement("div");
      nameDiv.classList.add("name");
      nameDiv.innerHTML = name;
      dailyDiv.appendChild(nameDiv);
    }
  });
//搜索
let inputClick = document.querySelector("span");
inputClick.addEventListener("click", () => {
  let all = document.querySelector(".all");
  let searchPage = document.querySelector(".searchPage");
  all.style.display = "none";
  searchPage.style.display = "block";
});
let searchPage = document.querySelector(".searchPage");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let search = document.querySelector("input").value;
  console.log(search);
  let all = document.querySelector(".all");
  let searchPage = document.querySelector(".searchPage");
  all.style.display = "block";
  searchPage.style.display = "all";
  fetch(
    `https://devapi.qweather.com/v7/weather/now?location=${search}&key=33f8567845a84f458bc0d1b6e286328e`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let { tem, wea, humidity } = data;
      let temDiv = document.createElement("div");
      let temLiObj = {};
      let temLi;
      for (let i = 0; i < 4; i++) {
        temLi = document.createElement("li");
        temLiObj[i] = temLi;
        temLi.classList.add("temLi");
        temLi.classList.add(`temLi${i}`);
      }
      temLiObj[0].innerHTML = tem;
      temLiObj[1].innerHTML = wea;
    });
});
