if (an.mangan[a[0].y / 30+2][a[0].x / 30+1] === 0 && an.mangan[a[0].y / 30][a[0].x / 30+1] === 0 &&an.mangan[a[0].y / 30-1][a[0].x / 30-1] === 0) {
    a[1]=new Pixcel(a[0].x, a[0].y-30 , "green")
    a[2]=new Pixcel(a[0].x, a[0].y+30 , "green")
    a[3]=new Pixcel(a[0].x-30, a[0].y-30 , "green")
    this.trangthai = 2;
}
break;