function welcome(){
    let welcome_text = '欢迎光顾🍓🌐世界~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";//获取用户来源域名
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\npc/ipad端浏览体验更佳，左小角有音乐可以享用！',//欢迎文本，可自行修改
        imageUrl: "http://xn--yetu62gmga.top/i/2022/08/07/62ef8f4bb5d7e.gif",//图片，自行修改位置
        timer: 3000,//弹出时间
        showConfirmButton: false
    });
}
$(document).ready(()=>{//若未引用JQuery，请引用
    welcome()
})