//btnというidを持つHTML要素を取得し、定数に代入する
let Text = document.getElementById('text').textContent;

const Btn = document.getElementById('btn');

Btn.addEventListener('click', () =>{
    document.getElementById('text').textContent = 'ボタンをクリックしました';
});