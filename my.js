function testGS(){


const url = "https://script.googleusercontent.com/macros/echo?user_content_key=u9sdIf4HjXMVd5ZgHnEiNcjwg_33XC2JkiKyRi8S2djwpD_-Gmjw8l-shKa6CMNBhX5K6uZxebo2wmCAG-_1L2VAD5ppJqpmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnB-9TT--roqCtyhCtufEhzRbZpMqaFobE-vb6OmGKpRvUk7yvOH6VDUT_asazEW60WxRxJ-uog6snSP3dUFeRNBV8iHwCP5zRQ&lib=M3NhoUhj89Wzzdt_nnDguyHGwySs13FkQ"


fetch(url)
    .then(d => d.json())
    .then(d => {

            document.getElementById("app").textContent = d[0].status;

    });

}

document.getElementById("btn").addEventListener("click",testGS);