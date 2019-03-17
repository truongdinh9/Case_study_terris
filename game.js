let pen=canvas1.getContext("2d");
let a=[]//Mảng của các pixcel
let a1=[]//Mảng của các hình vuông
let an= {
    mangan :[],
    maxday : [],
    maxleft : [],
    maxright : [],
    bandau:function() {
        for (let i = 0; i < 19; i++) {
            an.mangan[i] = [];
            an.maxday[i] = 18;
            for (let j = 0; j < 10; j++) {
                an.mangan[i][j] = 0
            }
        }
        for (let j=0;j<10;j++){
            an.maxleft=0
            an.maxleft=10
        }
    },
    setmaxday:function () {
        for(let j=0;j<10;j++){
            for (let i=0;i<18;i++){                     // Không hợp lý
                if(an.mangan[i][j]===1){
                    an.maxday[j]=i;
                    break;
                }
            }
        }

    },
    setmaxleft:function () {
        for(let i=0;i<18;i++){
            for (let j=0;j<10;j++){
                if(an.mangan[i][j]===1){
                    an.maxday[j]=i;
                    break;
                }
            }
        }

    }
};

function Pixcel(x,y,collorr) {
    this.x=x
    this.y=y
    this.colorr=collorr;
    this.createapixcel=function () {
        pen.strokeRect(this.x,this.y,30,30)
        pen.fillStyle=this.colorr;
        pen.fillRect(this.x,this.y,30,30)
    }
    this.clearapixcel=function () {
        pen.clearRect(this.x,this.y,30,30)
    }
}
// let a=new Pixcel(100,100,"Blue");
// a.createapixcel();
// a.clearapixcel();
function vuong(x,y) {
    // this.collorr="red";
    this.x=x;
    this.y=y;
    this.createavuong=function() {
        a[0]=new Pixcel(this.x, this.y, "red");
        a[1]=new Pixcel(this.x, this.y + 30, "red");
        a[2]=new Pixcel(this.x + 30, this.y, "red");
        a[3]=new Pixcel(this.x + 30, this.y + 30, "red");
    }
    this.drawvuong=function () {
        a[0].createapixcel();
        a[1].createapixcel();
        a[2].createapixcel();
        a[3].createapixcel();
    }
    this.cleardraw=function () {
        a[0].clearapixcel();
        a[1].clearapixcel();
        a[2].clearapixcel();
        a[3].clearapixcel();
    }
    this.rowi=function () {
        this.y+=30;
        a[0].y+=30;
        a[1].y+=30;
        a[2].y+=30;
        a[3].y+=30;
    }
    this.moveleft=function () {
        this.x-=30;
        a[0].x-=30;
        a[1].x-=30;
        a[2].x-=30;
        a[3].x-=30;
    }
    this.moveright=function () {
        this.x+=30;
        a[0].x+=30;
        a[1].x+=30;
        a[2].x+=30;
        a[3].x+=30;
    }

}
function dieukienkhongroi(){
    return an.mangan[a[0].y/30+1][a[0].x/30+1]===1||an.mangan[a[1].y/30+1][a[1].x/30]===1||an.mangan[a[2].y/30+1][a[2].x/30]===1||an.mangan[a[3].y/30+1][a[3].x/30]===1
    ||a[0].y/30>=17||a[1].y/30>=17||a[2].y/30>=17||a[3].y/30>=17
}





an.bandau();
a1[0]=new vuong(0,0);//                                Doan
a1[0].createavuong();//
setInterval(function (){//                       nay
    if(dieukienkhongroi()){         //a1[0].y<((an.maxday[(a1[0].x/30)]-2)*30 điều kiện tạm thôi, cần phải sửa.
        an.mangan[a[0].y/30][a[0].x/30]=1
        an.mangan[a[1].y/30][a[1].x/30]=1
        an.mangan[a[2].y/30][a[2].x/30]=1
        an.mangan[a[3].y/30][a[3].x/30]=1
        an.setmaxday();
        a1[0]=new vuong(0,0)
        a1[0].createavuong();
    }else {

        a1[0].cleardraw();//                                 cho
        a1[0].rowi() //
        a1[0].drawvuong()
        console.log('ddd')
    }                               //                                   chay
},500);//                                           thu

function Controls(event) {
    switch (event.code) {
        case "KeyA":
            if(a1[0].x>=30){
            a1[0].cleardraw();
            a1[0].moveleft()
            a1[0].drawvuong()
            }
            break;
        case "KeyD":
            if(a1[0].x<240){
                a1[0].cleardraw();
                a1[0].moveright();
                a1[0].drawvuong();
            }
    }

}
document.addEventListener("keydown",Controls)

