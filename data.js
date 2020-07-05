

var DATA = [
    { user: 'ingikim', message: 'Welcome to Code States #codestates', created_at: '2019-01-03 12:30:20' },
    { user: 'satya', message: 'this is test message #pair #programming', created_at: '2019-01-04 18:30:20' },
    { user: 'sundar', message: 'code now! #work #hard', created_at: '2019-01-05 07:30:20' },
    { user: 'steve', message: 'Stay hungry, and stay foolish', created_at: '2015-01-03 12:30:20' },
    { user: 'tim', message: 'education for real world', created_at: '2019-01-04 18:30:20' }
  ];
  
  var randomUser = ['ingikim', 'satya', 'sundar', 'steve', 'tim', 'jeff'];
  var randomMessage = [
    '이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.',
    '헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.',
    '헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다.',
    '모든 국민은 직업선택의 자유를 가진다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 행정권은 대통령을 수반으로 하는 정부에 속한다.',
    '민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.',
    '국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.',
    '인간이 얼음에 고행을 따뜻한 가장 이것이다. 꽃이 곧 동력은 끝에 동산에는 그것은 거선의 별과 인생의 것이다. 구하지 착목한는 스며들어 인생의 것이다.',
    '새 가슴에 있는 만천하의 있다. 몸이 뜨거운지라, 청춘의 소리다.이것은 같으며, 피다. 설산에서 힘차게 옷을 피다. 놀이 그들의 인간의 주는 소금이라',
    '귀는 우리는 피에 무엇이 이것이다. 구하지 우리는 그들은 약동하다. 따뜻한 발휘하기 사람은 충분히 사막이다.'
  ]
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function generateNewTweet() {
    var tweet = {};
    tweet.user = randomUser[getRandomInt(0, randomUser.length)];
    tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
    tweet.created_at = new Date(); // 어떻게 하면 보기 좋은 형태로 나타낼 수 있을까요?
    return tweet;
  }
  
  Number.prototype.padLeft = function() {
    if(this < 10) {
      return '0' + String(this);
    }
    else {
      return String(this);
    }
  }
  
  Date.prototype.format = function() {
    var yyyy = this.getFullYear();
    var month = (this.getMonth() + 1).padLeft();
    var dd = this.getDate().padLeft();
    var HH = this.getHours().padLeft();
    var mm = this.getMinutes().padLeft();
    var ss = this.getSeconds().padLeft();
  
    var format = [yyyy, month, dd].join('-') + ' ' + [HH, mm, ss].join(':');
    return format;
  }
  
  //TODO: DATA를 기반으로 출력되는 함수를 만들어야한다. HTML코드로 하드코딩된 부분을 
  //동적으로 바꿔야 한다. 
  /*
  data json을 기반으로 template을 작성 후 함수를 작성해야 한다. printData();
  그리고 그 부분을 html로 출력하면 된다. 

  함수를 만들고 그 함수를 foreach하여 반복시킨다. 
  */
 function printData(DATA){
  //  template을 넣을 부모태그를 선택해야 한다. 
  let parent = document.querySelector("#tweets");
  //template을 선택한다. 
  let tmpl = document.querySelector(".will-be-rendered");
  //템플릿을 clone해서 붙여넣기
  let element = document.importNode(tmpl.content, true);

  //element의 user, date, tweetcomment 값 넣어주기. 
  element.querySelector('.user').textContent = DATA.user;
  element.querySelector('.date').textContent = DATA.created_at;
  element.querySelector('.tweetComment').textContent = DATA.message;
  parent.appendChild(element);
 }

 //TODO: 새로운 트윗을 생성하는 함수를 만들어야한다. 
// 인풋값을 입력시에는 템플릿을 거쳐 새로운 HTML이 출력된다. 
let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일

let formatday = year+"-"+(("00"+month.toString()).slice(-2))+"-"+(("00"+day.toString()).slice(-2));

let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
let seconds = today.getSeconds();  // 초

function creatNewTweet(){
    //먼저 인풋값들을 선택한다. 
  let parent = document.querySelector("#tweets");
  let tmpl = document.querySelector(".will-be-rendered");
  let element = document.importNode(tmpl.content, true);


  element.querySelector('.user').textContent = document.querySelector('#inputUser').value;
  element.querySelector('.date').textContent = formatday + " " +  hours +":" + minutes + ":" + seconds;
  element.querySelector('.tweetComment').textContent = document.querySelector('#inputcomment').value;

  parent.prepend(element);
  //새로운 트윗이 생성되면 다시 tweets에 넣어준다. 
  tweets.push(document.querySelector(".user"));

  for (let i = 0; i < tweets.length; i ++){
    tweets[i].onclick = filterTweet;
}

}

//TODO:show random 은 랜덤하게 트윗을 생성하는 것이다. 
function showRandom(){
    let parent = document.querySelector("#tweets");
    let tmpl = document.querySelector(".will-be-rendered");
    let element = document.importNode(tmpl.content, true);
    element.querySelector('.user').textContent = generateNewTweet().user
    element.querySelector('.date').textContent = formatday + " " +  hours +":" + minutes + ":" + seconds;
    element.querySelector('.tweetComment').textContent = generateNewTweet().message;
  
    parent.prepend(element);
    tweets.push(document.querySelector(".user"));

    for (let i = 0; i < tweets.length; i ++){
        tweets[i].onclick = filterTweet;
    }
    
}
//TODO: 
function filterTweet(event){
    //그 사람이 쓴 것만 남기고 다 지운다. 
    for (let i = 0; i < tweets.length; i ++){
      if (event.target.textContent !== tweets[i].textContent){
        tweets[i].parentElement.remove();
      }
}
}




