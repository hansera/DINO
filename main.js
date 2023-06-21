const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let jumping = false;


//어떤 좌표에서 공룡이 등장 할 건지 저장, 캐릭터의 속성부터 object 자료에 정리해두면 편리 함
const dino = {
  x : 10,
  y : 200,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

//장애물 표시, 동일하게 object 자료에 정리, 비슷한게 많으니 class로 작성하기


class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }

  draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
const cactus여러개 = [];
let jump_timer = 0;

//1초에 60번 코드 실행하기, 장애물이 움직인다!
function run (){
  requestAnimationFrame(run);
  timer++;

  ctx.clearRect(0,0, canvas.width, canvas.height);

  if (timer % 144 === 0){
    const cactus = new Cactus();
    cactus여러개.push(cactus);
     }

     cactus여러개.forEach((a, i, o)=> {
      //x 좌표가 0 미만이면 제거
      if (a.x < 0){
        o.splice(i, 1)
      }
      // a.x-=3;

      crach(dino, a);

      a.draw();
     })

     //Space를 누르면 y값 위로 움직인다.
     if (jumping == true){
      dino.y-=2;
      jump_timer++;
     }
     //점프 한 상태가 아니면 y++시작
     if(jumping == false) {
      if (dino.y < 200) {
      dino.y++;
     }
    }
     //점프한지 100프레임이 지나면 dino.y를 멈춘다.
     if(jump_timer > 100){
      jumping = false;
      jump_timer = 0;
     }
  dino.draw()
}

run();

//충돌 확인하기

function crach(dino, cactus){

}


document.addEventListener('keydown', function(e) {
  if (e.code === 'Space'){
    jumping = true;
  }
})
