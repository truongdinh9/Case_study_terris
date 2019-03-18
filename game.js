let pen=canvas1.getContext("2d");
let a=[];//Mảng của các pixcel
let a1=[];//Mảng của các hình vuông
let an= {
    mangan :[],
    bandau:function() {
        for (let i = 0; i < 20; i++) {
            an.mangan[i] = [];
            for (let j = 0; j < 12; j++) {
                if(j===0||j===11){an.mangan[i][j]=1}else {an.mangan[i][j] = 0}
            }
        }

    }
};

function Pixcel(x,y,collorr) {
    this.x=x;
    this.y=y;
    this.colorr=collorr;
    this.createapixcel=function () {
        pen.strokeStyle="white"
        pen.strokeRect(this.x,this.y,30,30);
        pen.fillStyle=this.colorr;
        pen.fillRect(this.x,this.y,30,30)
    };
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
    this.trangthai=0;
    this.createavuong=function() {
        a[0]=new Pixcel(this.x, this.y, "red");
        a[1]=new Pixcel(this.x, this.y + 30, "red");
        a[2]=new Pixcel(this.x + 30, this.y, "red");
        a[3]=new Pixcel(this.x + 30, this.y + 30, "red");
    };
    this.quay=function () {this.trangthai=1
    };
}
function hinh2(x,y) {
    // this.collorr="red";
    this.x=x;
    this.y=y;
    this.trangthai=0;
    this.creathinh2=function() {
        a[0]=new Pixcel(this.x+30, this.y, "green");
        a[1]=new Pixcel(this.x, this.y+30 , "green");
        a[2]=new Pixcel(this.x + 30, this.y+30, "green");
        a[3]=new Pixcel(this.x + 60, this.y + 30, "green");
    };
    this. quay=function() {
        switch (this.trangthai) {
            case 0:
                if (an.mangan[a[0].y / 30][a[0].x / 30] === 0 && an.mangan[a[0].y / 30 + 1][a[0].x / 30] === 0 && an.mangan[a[0].y / 30 + 2][a[0].x / 30] === 0) {
                    a[1]=new Pixcel(a[0].x-30, a[0].y - 30, "green")
                    a[2]=new Pixcel(a[0].x -30 , a[0].y, "green");
                    a[3]=new Pixcel(a[0].x -30, a[0].y + 30, "green");
                    this.trangthai = 1;
                }
                break;
            case 1:

                if (an.mangan[a[0].y / 30][a[0].x / 30] === 0 && an.mangan[a[0].y / 30 ][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+2] === 0) {
                    a[1]=new Pixcel(a[0].x-30, a[0].y - 30, "green")
                    a[2]=new Pixcel(a[0].x , a[0].y-30, "green");
                    a[3]=new Pixcel(a[0].x +30, a[0].y- 30, "green")
                    this.trangthai = 2;
                }
                break;
            case 2:
                if (an.mangan[a[0].y / 30+2][a[0].x / 30+2] === 0 && an.mangan[a[0].y / 30+1 ][a[0].x / 30+2] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+2] === 0) {
                    a[1]=new Pixcel(a[0].x+30, a[0].y - 30, "green")
                    a[2]=new Pixcel(a[0].x+30 , a[0].y, "green");
                    a[3]=new Pixcel(a[0].x +30, a[0].y+ 30, "green")
                    this.trangthai = 3;
                }
                break;
            default:
                if (an.mangan[a[0].y / 30+2][a[0].x / 30+2] === 0 && an.mangan[a[0].y / 30+2 ][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30+2][a[0].x / 30] === 0) {
                    a[1]=new Pixcel(a[0].x-30, a[0].y + 30, "green")
                    a[2]=new Pixcel(a[0].x , a[0].y+30, "green")
                    a[3]=new Pixcel(a[0].x +30, a[0].y+ 30, "green")
                    this.trangthai = 0;
                    console.log("haha")
                }

        }

    }
}
function hinh3(x,y) {
    // this.collorr="red";
    this.x=x;
    this.y=y;
    this.trangthai=0;
    this.creathinh3=function() {
        a[0]=new Pixcel(this.x+30, this.y, "blue");
        a[1]=new Pixcel(this.x, this.y , "blue");
        a[2]=new Pixcel(this.x + 30, this.y+30, "blue");
        a[3]=new Pixcel(this.x + 60, this.y + 30, "blue");
    };
    this. quay=function() {
        switch (this.trangthai) {
            case 0:
                if (an.mangan[a[0].y / 30][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30 + 1][a[0].x / 30] === 0 && an.mangan[a[0].y / 30 + 2][a[0].x / 30] === 0) {
                    a[1]=new Pixcel(a[0].x-30, a[0].y - 30, "blue")
                    a[2]=new Pixcel(a[0].x -30 , a[0].y, "blue");
                    a[3]=new Pixcel(a[0].x -30, a[0].y + 30, "blue");
                    this.trangthai = 1;
                }
                break;
            case 1:

                if (an.mangan[a[0].y / 30][a[0].x / 30] === 0 && an.mangan[a[0].y / 30 ][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+2] === 0) {
                    a[1]=new Pixcel(a[0].x-30, a[0].y - 30, "green")
                    a[2]=new Pixcel(a[0].x , a[0].y-30, "green");
                    a[3]=new Pixcel(a[0].x +30, a[0].y- 30, "green")
                    this.trangthai = 2;
                }
                break;
            case 2:
                if (an.mangan[a[0].y / 30+2][a[0].x / 30+2] === 0 && an.mangan[a[0].y / 30+1 ][a[0].x / 30+2] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+2] === 0) {
                    a[1]=new Pixcel(a[0].x+30, a[0].y - 30, "green")
                    a[2]=new Pixcel(a[0].x+30 , a[0].y, "green");
                    a[3]=new Pixcel(a[0].x +30, a[0].y+ 30, "green")
                    this.trangthai = 3;
                }
                break;
            default:
                if (an.mangan[a[0].y / 30+2][a[0].x / 30+2] === 0 && an.mangan[a[0].y / 30+2 ][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30+2][a[0].x / 30] === 0) {
                    a[1]=new Pixcel(a[0].x-30, a[0].y + 30, "green")
                    a[2]=new Pixcel(a[0].x , a[0].y+30, "green")
                    a[3]=new Pixcel(a[0].x +30, a[0].y+ 30, "green")
                    this.trangthai = 0;
                    console.log("haha")
                }

        }

    }
}
function draw() {
    a[0].createapixcel();
    a[1].createapixcel();
    a[2].createapixcel();
    a[3].createapixcel();
};
cleardraw=function () {
    a[0].clearapixcel();
    a[1].clearapixcel();
    a[2].clearapixcel();
    a[3].clearapixcel();
};
function rowi() {
    a[0].y+=30;
    a[1].y+=30;
    a[2].y+=30;
    a[3].y+=30;
};
function moveleft () {

    a[0].x-=30;
    a[1].x-=30;
    a[2].x-=30;
    a[3].x-=30;
};
function moveright() {
    a[0].x+=30;
    a[1].x+=30;
    a[2].x+=30;
    a[3].x+=30;
}
function dieukienngungroi(){
    return an.mangan[a[0].y/30+2][a[0].x/30+1]===1||an.mangan[a[1].y/30+2][a[1].x/30+1]===1||an.mangan[a[2].y/30+2][a[2].x/30+1]===1||an.mangan[a[3].y/30+2][a[3].x/30+1]===1
    ||a[0].y/30>=17||a[1].y/30>=17||a[2].y/30>=17||a[3].y/30>=17
}
function dieukienkosangphai(){
    return an.mangan[a[0].y/30+1][a[0].x/30+2]===1||an.mangan[a[1].y/30+1][a[1].x/30+2]===1||an.mangan[a[2].y/30+1][a[2].x/30+2]===1||an.mangan[a[3].y/30+1][a[3].x/30+2]===1
        ||a[0].x/30>=9||a[1].x/30>=9||a[2].x/30>=9||a[3].x/30>=9
}
function dieukienkosangtrai(){
    return an.mangan[a[0].y/30+1][a[0].x/30]===1||an.mangan[a[1].y/30+1][a[1].x/30]===1||an.mangan[a[2].y/30+1][a[2].x/30]===1||an.mangan[a[3].y/30+1][a[3].x/30]===1
        ||a[0].x/30<=0||a[1].x/30<=0||a[2].x/30<=0||a[3].x/30<=0
}



an.bandau();
a1[0]=new hinh3(0,0);//                                Doan
a1[0].creathinh3();//
setInterval(function (){//                       nay
    if(dieukienngungroi()){
        an.mangan[a[0].y/30+1][a[0].x/30+1]=1;
        an.mangan[a[1].y/30+1][a[1].x/30+1]=1;
        an.mangan[a[2].y/30+1][a[2].x/30+1]=1;
        an.mangan[a[3].y/30+1][a[3].x/30+1]=1;
        a1[0]=new hinh3(0,0);//                                Doan
        a1[0].creathinh3();//
    }else {

        cleardraw();//                                 cho
        rowi() ;//
        draw();
        console.log('ddd')
    }                               //                                   chay
},500);//                                           thu

function Controls(event) {
    switch (event.code) {
        case "KeyA":
            if(!dieukienkosangtrai()){
            cleardraw();
            moveleft();
            draw()
            }
            break;
        case "KeyD":
            if (!dieukienkosangphai()) {
                cleardraw();
                moveright();
                draw();
            }
            break;
        case "KeyW":
            cleardraw();
            a1[0].quay();
            draw();
            break;
    }

}
document.addEventListener("keydown",Controls);