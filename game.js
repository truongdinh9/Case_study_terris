let pen=canvas1.getContext("2d");
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
let a=new Pixcel(100,100,"Blue");
a.createapixcel();