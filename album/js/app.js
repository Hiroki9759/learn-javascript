//アルバムデータの作成
let album = [
    {src: '/Users/iwanahiroki/Documents/learn-javascript/album/img/IMG_6500.JPG', msg: '完成図'},
    {src: '/Users/iwanahiroki/Documents/learn-javascript/album/img/IMG_6460.JPG', msg: '材料'},
    {src: '/Users/iwanahiroki/Documents/learn-javascript/album/img/IMG_6461.JPG', msg: 'スパイス'},
    {src: '/Users/iwanahiroki/Documents/learn-javascript/album/img/IMG_6463.JPG', msg: 'ライムリーフ'},
    {src: '/Users/iwanahiroki/Documents/learn-javascript/album/img/IMG_6464.JPG', msg: 'レモングラス'},
    
];

//最初のデータを表示していく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

//サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i  < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);    
}
//クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event){
    if(event.target.src){
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});