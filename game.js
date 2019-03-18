var pen=canvas1.getContext("2d");
let diem=0;
let a=[];//Mảng của các pixcel
let a1=[];//Mảng của các hình vuông
let an= {
    mangan :[],
    bandau:function() {
        for (let i = 0; i < 20; i++) {
            an.mangan[i] = [];
            for (let j = 0; j < 14; j++) {
                if(j===0||j===11||j===12||j===13||i===19){an.mangan[i][j]=1}else {an.mangan[i][j] = 0}
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

function vuong(x,y) {
    // this.collorr="red";
    this.x=x;
    this.y=y;
    this.trangthai=0;
    this.creathinh=function() {
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
    this.creathinh=function() {
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
    this.creathinh=function() {
        a[0]=new Pixcel(this.x+30, this.y, "blue");
        a[1]=new Pixcel(this.x, this.y , "blue");
        a[2]=new Pixcel(this.x + 30, this.y+30, "blue");
        a[3]=new Pixcel(this.x + 60, this.y + 30, "blue");
    };
    this. quay=function() {
        switch (this.trangthai) {
            case 0:
                if (an.mangan[a[0].y / 30+2][a[0].x / 30] === 0 && an.mangan[a[0].y / 30 ][a[0].x / 30+1] === 0 ) {
                    a[2]=new Pixcel(a[0].x -30 , a[0].y+30, "blue");
                    a[3]=new Pixcel(a[0].x , a[0].y -30, "blue");
                    this.trangthai = 1;
                }
                break;
            case 1:

                if (an.mangan[a[0].y / 30][a[0].x / 30] === 0 && an.mangan[a[0].y / 30 ][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+2] === 0) {
                    a[2]=new Pixcel(a[0].x , a[0].y+30, "blue");
                    a[3]=new Pixcel(a[0].x +30, a[0].y+ 30, "blue")
                    this.trangthai = 0;
                }
                break;
        }

    }
}
function hinh4(x,y) {
    // this.collorr="red";
    this.x=x;
    this.y=y;
    this.trangthai=0;
    this.creathinh=function() {
        a[0]=new Pixcel(this.x+30, this.y, "orange");
        a[1]=new Pixcel(this.x+60, this.y , "orange");
        a[2]=new Pixcel(this.x + 30, this.y+30, "blue");
        a[3]=new Pixcel(this.x, this.y + 30, "blue");
    };
    this. quay=function() {
        switch (this.trangthai) {
            case 0:
                if (an.mangan[a[0].y / 30][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30+2 ][a[0].x / 30+2] === 0 ) {
                    a[2]=new Pixcel(a[0].x , a[0].y-30, "blue");
                    a[3]=new Pixcel(a[0].x+30 , a[0].y +30, "blue");
                    this.trangthai = 1;
                }
                break;
            case 1:

                if (an.mangan[a[0].y / 30+2][a[0].x / 30+1] === 0 &&  an.mangan[a[0].y / 30+2][a[0].x / 30] === 0) {
                    a[2]=new Pixcel(a[0].x , a[0].y+30, "blue");
                    a[3]=new Pixcel(a[0].x -30, a[0].y+ 30, "blue")
                    this.trangthai = 0;
                }
                break;
        }

    }
}
function hinh6(x,y) {
    // this.collorr="red";
    this.x=x;
    this.y=y;
    this.trangthai=0;
    this.creathinh=function() {
        a[0]=new Pixcel(this.x+30, this.y, "green");
        a[1]=new Pixcel(this.x+30, this.y+30 , "green");
        a[2]=new Pixcel(this.x , this.y+30, "green");
        a[3]=new Pixcel(this.x + 30, this.y -30 , "green");
    };
    this. quay=function() {
        switch (this.trangthai) {
            case 0:
                if (an.mangan[a[0].y / 30+1][a[0].x / 30] === 0 && an.mangan[a[0].y / 30][a[0].x / 30] === 0 &&an.mangan[a[0].y / 30+1][a[0].x / 30+2] === 0) {
                    a[1]=new Pixcel(a[0].x-30, a[0].y , "green")
                    a[2]=new Pixcel(a[0].x-30, a[0].y-30 , "green")
                    a[3]=new Pixcel(a[0].x +30, a[0].y , "green");
                    this.trangthai = 1;
                }
                break;
            case 1:

                if (an.mangan[a[0].y / 30][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+2] === 0 &&an.mangan[a[0].y / 30+2][a[0].x / 30+1] === 0) {
                    a[1]=new Pixcel(a[0].x, a[0].y-30 , "green")
                    a[2]=new Pixcel(a[0].x+30, a[0].y-30 , "green")
                    a[3]=new Pixcel(a[0].x, a[0].y+30 , "green")
                    this.trangthai = 2;
                }
                break;
            case 2:
                if (an.mangan[a[0].y / 30+1][a[0].x / 30] === 0 && an.mangan[a[0].y / 30+1][a[0].x / 30+2] === 0 &&an.mangan[a[0].y / 30+2][a[0].x / 30+2] === 0) {
                    a[1]=new Pixcel(a[0].x+30, a[0].y , "green")
                    a[2]=new Pixcel(a[0].x-30 , a[0].y, "green");
                    a[3]=new Pixcel(a[0].x +30, a[0].y+ 30, "green")
                    this.trangthai = 3;
                }
                break;
            default:
                if (an.mangan[a[0].y / 30+2][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+1] === 0 &&an.mangan[a[0].y / 30+2][a[0].x / 30] === 0){
                    a[1]=new Pixcel(a[0].x, a[0].y - 30, "green")
                    a[2]=new Pixcel(a[0].x , a[0].y+30, "green")
                    a[3]=new Pixcel(a[0].x -30, a[0].y+ 30, "green")
                    this.trangthai = 0;
                    console.log("haha")
                }

        }

    }
}
function hinh7(x,y) {
    // this.collorr="red";
    this.x=x;
    this.y=y;
    this.trangthai=0;
    this.creathinh=function() {
        a[0]=new Pixcel(this.x+30, this.y, "red");
        a[1]=new Pixcel(this.x+30, this.y+30 , "red");
        a[2]=new Pixcel(this.x+30 , this.y-30, "red");
        a[3]=new Pixcel(this.x+60, this.y +30 , "green");
    };
    this. quay=function() {
        switch (this.trangthai) {
            case 0:
                if (an.mangan[a[0].y / 30+1][a[0].x / 30+2] === 0 && an.mangan[a[0].y / 30+1][a[0].x / 30] === 0 &&an.mangan[a[0].y / 30+2][a[0].x / 30] === 0) {
                    a[1]=new Pixcel(a[0].x-30, a[0].y , "red")
                    a[2]=new Pixcel(a[0].x+30, a[0].y , "red")
                    a[3]=new Pixcel(a[0].x -30, a[0].y+30 , "green");
                    this.trangthai = 1;
                }
                break;
                //ok
            case 1:

                if (an.mangan[a[0].y / 30][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30+2][a[0].x / 30+1] === 0 &&an.mangan[a[0].y / 30][a[0].x / 30] === 0) {
                    a[1]=new Pixcel(a[0].x, a[0].y-30 , "red")
                    a[2]=new Pixcel(a[0].x, a[0].y+30 , "red")
                    a[3]=new Pixcel(a[0].x-30, a[0].y-30 , "green")
                    this.trangthai = 2;
                }
                break;
                //ok
            case 2:
                if (an.mangan[a[0].y / 30+1][a[0].x / 30+2] === 0 && an.mangan[a[0].y / 30+1][a[0].x / 30] === 0 &&an.mangan[a[0].y / 30][a[0].x / 30+2] === 0) {
                    a[1]=new Pixcel(a[0].x+30, a[0].y , "red")
                    a[2]=new Pixcel(a[0].x-30 , a[0].y, "red");
                    a[3]=new Pixcel(a[0].x +30, a[0].y- 30, "green")
                    this.trangthai = 3;
                }

                break;
            default:
                if (an.mangan[a[0].y / 30+2][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+1] === 0 &&an.mangan[a[0].y / 30+2][a[0].x / 30+2] === 0){
                    a[1]=new Pixcel(a[0].x, a[0].y - 30, "red")
                    a[2]=new Pixcel(a[0].x , a[0].y+30, "red")
                    a[3]=new Pixcel(a[0].x +30, a[0].y+ 30, "green")
                    this.trangthai = 0;
                    console.log("haha")
                }

        }

    }
}
function hinh5(x,y) {
    // this.collorr="red";
    this.x=x;
    this.y=y;
    this.trangthai=0;
    this.creathinh=function() {
        a[0]=new Pixcel(this.x+60, this.y, "#FF3399");
        a[1]=new Pixcel(this.x+60, this.y-30 , "#FF3399");
        a[2]=new Pixcel(this.x + 60, this.y+60, "#FF3399");
        a[3]=new Pixcel(this.x + 60, this.y + 30, "#FF3399");
    };
    this. quay=function() {
        switch (this.trangthai) {
            case 0:
                if (an.mangan[a[0].y / 30+1][a[0].x / 30] === 0 && an.mangan[a[0].y / 30+1 ][a[0].x / 30+2] === 0&& an.mangan[a[0].y / 30+1][a[0].x / 30+3]===0) {
                    a[2]=new Pixcel(a[0].x -30 , a[0].y, "#FF3399");
                    a[1]=new Pixcel(a[0].x +30 , a[0].y, "#FF3399");
                    a[3]=new Pixcel(a[0].x +60, a[0].y, "#FF3399");
                    this.trangthai = 1;
                }
                break;
            case 1:

                if (an.mangan[a[0].y / 30][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30 +2][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30+3][a[0].x / 30+1] === 0) {
                    a[2]=new Pixcel(a[0].x , a[0].y+30, "#FF3399");
                    a[3]=new Pixcel(a[0].x , a[0].y- 30, "#FF3399");
                    a[1]=new Pixcel(a[0].x , a[0].y+60, "#FF3399");
                    this.trangthai = 0;
                }
                break;
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

function randoom(){
    a1[0]=[new hinh2(0,0),new hinh3(0,0),new hinh4(0,0),new hinh5(0,0),new hinh6(0,0),new hinh7(0,0),new vuong(0,0)][Math.floor(Math.random()*7)];
    a1[0].creathinh();
}

an.bandau();
a1[0]=new hinh5(0,0);//                                Doan
a1[0].creathinh();//
setInterval(function (){//                       nay
    if(dieukienngungroi()){
        an.mangan[a[0].y/30+1][a[0].x/30+1]=1;
        an.mangan[a[1].y/30+1][a[1].x/30+1]=1;
        an.mangan[a[2].y/30+1][a[2].x/30+1]=1;
        an.mangan[a[3].y/30+1][a[3].x/30+1]=1;
        checkgameover();
        diemso();
        randoom();
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
        case "KeyS":
            if(!dieukienngungroi()){
                cleardraw();//                                 cho
                rowi() ;//
                draw();

            }
            break;
    }

}
document.addEventListener("keydown",Controls);
function diemso(){
    for (let i=1;i<19;i++){
        let check=true;
        for(let j=1;j<11;j++){
            if (an.mangan[i][j]!==1)check=false
        }
        if (check){
            diem+=10
            document.getElementById("diem").innerText= "Điểm của bạn: "+diem;

            for(let z=1;z<11;z++){an.mangan[i][z]=0}
            for (let k=i;k>1;k--){
                for(let m=1;m<11;m++){
                    an.mangan[k][m]=an.mangan[k-1][m]
                }
            }
            pen.clearRect(0,0,300,540)

            for (let m=18;m>1;m--){
                for(let k=1;k<11;k++){
                    if(an.mangan[m][k]===1){
                        let z=(k-1)*30;
                        let t=(m-1)*30;
                        draw2(z,t)
                    }
                }
            }
            i--
            // for (let m=i;m>0;m--) {
            //     for (let k = 1; k < 11; j++) {
            //         if(an.mangan[m-1][k]===1)
            //         {pen.clearRect(k*30,(m-1)*30,30,30)
            //             an.mangan[m][k] = an.mangan[m-1][k]
            //          let o=new Pixcel(k*30,m*30,"red")
            //          o.createapixcel()
            //         }
            //
            //     }
            // }

        }
    }
}
document.getElementById("diem").innerText= "Điểm của bạn: "+diem;
let t=0;z=510;

function draw2(t,z){
pen.strokeStyle="white"  ;
pen.strokeRect(t,z,30,30)
pen.fillStyle="red"
pen.fillRect(t,z,30,30)
}
function checkgameover() {
    if(an.mangan[1][1]&&an.mangan[1][2])alert("Game over")

}
