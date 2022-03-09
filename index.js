const Word = document.querySelector('.word');
let WordsArr = ["learn Randing HTML", "learn Randing CSS", "learn Randing Javascript", "learn Randing Python"];

setTimeout(function(){
    resetwords();                   //기존 텍스트 제거 및 루프실행
    setInterval(function(){         //커서 깜빡임 효과 넣기(가상요소 제어)
        blink();
    }, 500);
}, 1000);

// 함수정의
function blink(){                   //active class 활성,비활성
    Word.classList.toggle('active');
}
function resetwords(){              //기존 텍스트 제거 및 루프실행
    Word.textContent = "";
    DropWord(RandomString());
}
function RandomString(){            //random string 가져오기
    let SelectString = WordsArr[Math.floor(Math.random() * WordsArr.length)];
    let SelectStringArr = SelectString.split("");
    return SelectStringArr;
}
function DropWord(Arr){
    if (Arr.length > 0){
        Word.textContent += Arr.shift();
        setTimeout(function(){
            DropWord(Arr);
        }, 200);
    }
    else{
        setTimeout(resetwords,1000);
    }
}