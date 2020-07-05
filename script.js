console.log(DATA)
// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());
DATA.forEach(printData);

document.querySelector("#creatButton").onclick = creatNewTweet;
document.querySelector("#checknew").onclick = showRandom;



//TODO: 그사람의 이름을 클릭했을때, 그 사람이 쓴 트윗만을 보여준다. 



let tweets = Array.prototype.slice.call(document.querySelectorAll('.user'));

for (let i = 0; i < tweets.length; i ++){
    tweets[i].onclick = filterTweet;
}
