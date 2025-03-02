const button = document.querySelector(".switch")
button.addEventListener("click", switchBackground);


function  switchBackground () {
    console.log("背景切り替えました！！");
    
    
}



// // 実際に背景変える前に色を変更。
// function switchBackground() {
//     document.body.style.backgroundColor = "#333"; //背景をグレーに変更
// }

// // 色の切り替え。順々。
// const colors = ["#ede6d6", "#444", "#666", "#888", "#aaa", "#ede6d6"]; // 元の色に戻る
// let index = 0;

// function switchBackground() {
//     document.body.style.backgroundColor = colors[index];
//     index = (index + 1) % colors.length; //次の色へ(最後まで行ったら0に戻る)
// }








// ページが読み込まれたら 最初の画像を設定する
window.onload = function() {
    document.body.style.backgroundImage = `url('${images[0]}')`;
};



// 画像切り替え。
const images = ["img/bundo-kim-01-unsplash.jpg",
    "img/katrin-hauf-02-unsplash.jpg",
    "img/marion-botella-03-unsplash.jpg",
    "img/matthew-feeney--04-unsplash.jpg",
    "img/neven-krcmarek-05-unsplash.jpg",
    "img/nia-ramirez-06-unsplash.jpg"]; // 元の画像に戻る
let index = 0;

function switchBackground() {
    console.log(images[index]); // 確認用（今の画像URLをコンソールに出す）
    document.body.style.backgroundImage = 'url("${images[index]}")';
    // document.body.style.backgroundImage = 'url(" + images[index] + ")';
    document.body.style.background = `url('${images[index]}') no-repeat center center fixed`;
document.body.style.backgroundSize = "cover";

    index = (index + 1) % images.length; //次の色へ(最後まで行ったら0に戻る)
}


