//获取屏幕宽度(viewport)
// let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth; 
//获取html的dom
// let htmlDom = document.getElementsByTagName('html')[0];
//设置html的fontsize
// htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// window.addEventListener('resize', (e) => {
//     let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth; 
//     htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// });

// 获取视窗的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取视窗的高度
let htmlDom = document.getElementsByTagName("html")[0];


htmlDom.style.fontSize = htmlWidth / 10 + "px";
window.addEventListener("resize",(e) => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + "px";
})
