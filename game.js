let pen=canvas1.getContext("2d");
let a=[]//Mảng của các pixcel
let a1=[]//Mảng của các hình vuông
let vt=0;
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
    this.vt=a.length;
    this.createavuong=function() {
        a.push(new Pixcel(this.x, this.y, "red"));
        a.push(new Pixcel(this.x, this.y + 30, "red"));
        a.push(new Pixcel(this.x + 30, this.y, "red"));
        a.push(new Pixcel(this.x + 30, this.y + 30, "red"));
    }
    this.drawvuong=function () {
        a[this.vt].createapixcel();
        a[this.vt+1].createapixcel();
        a[this.vt+2].createapixcel();
        a[this.vt+3].createapixcel();
    }
    this.cleardraw=function () {
        a[this.vt].clearapixcel();
        a[this.vt+1].clearapixcel();
        a[this.vt+2].clearapixcel();
        a[this.vt+3].clearapixcel();
    }
    this.rowi=function () {
        this.y+=30;
        a[this.vt].y+=30;
        a[this.vt+1].y+=30;
        a[this.vt+2].y+=30;
        a[this.vt+3].y+=30;
    }
    // this.runnnn=function () {
    //     this.cleardraw();
    //     this.y+=30;
    //     this.drawvuong();
    // }

}
a1[0]=new vuong(0,0);
a1[0].createavuong();
setInterval(function (){
    a1[0].cleardraw();
    a1[0].rowi()
    a1[0].drawvuong();
    console.log(a1[0].y);
},1000);


// Ý tưởng: cho tất cả các pixcel cuối cùng vaò 1 mảng 2 chiều để tính cách sụt hố ăn điểm.