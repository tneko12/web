var Hello = require('./dom');

var app = new Vue({
    el: Hello.dom,
    data: {
        message: 'Hello Vue!2',
        ocerofield: [
            [2,2,2,2,2,2,2,2],
            [2,2,2,2,2,2,2,2],
            [2,2,2,2,2,2,2,2],
            [2,2,2,1,0,2,2,2],
            [2,2,2,0,1,2,2,2],
            [2,2,2,2,2,2,2,2],
            [2,2,2,2,2,2,2,2],
            [2,2,2,2,2,2,2,2],
        ],
        turn: 0,
        next: 1,
    },
    created: ()=> {
        console.log(111);
    },
    methods: {
        put(index1,index2) {
            if(this.ocerofield[index1][index2] !== 2) return;
            console.log(index1,index2);
            console.log(this.turn);
            //
            let left      = false;
            let up        = false;
            let right     = false;
            let down      = false;
            let leftup    = false;
            let rightup   = false;
            let leftdown  = false;
            let rightdown = false;

            if(0 <= index1-1 && 0 <= index2   && index1-1<8 && index2<8   && this.ocerofield[index1-1][index2]   === this.next) left      = true;
            if(0 <= index1   && 0 <= index2-1 && index1<8   && index2-1<8 && this.ocerofield[index1][index2-1]   === this.next) up        = true;
            if(0 <= index1+1 && 0 <= index2   && index1+1<8 && index2<8   && this.ocerofield[index1+1][index2]   === this.next) right     = true;
            if(0 <= index1   && 0 <= index2+1 && index1<8   && index2+1<8 && this.ocerofield[index1][index2+1]   === this.next) down      = true;
            if(0 <= index1-1 && 0 <= index2-1 && index1-1<8 && index2-1<8 && this.ocerofield[index1-1][index2-1] === this.next) leftup    = true;
            if(0 <= index1+1 && 0 <= index2-1 && index1+1<8 && index2-1<8 && this.ocerofield[index1+1][index2-1] === this.next) rightup   = true;
            if(0 <= index1-1 && 0 <= index2+1 && index1-1<8 && index2+1<8 && this.ocerofield[index1-1][index2+1] === this.next) leftdown  = true;
            if(0 <= index1+1 && 0 <= index2+1 && index1+1<8 && index2+1<8 && this.ocerofield[index1+1][index2+1] === this.next) rightdown = true;

            let put = false;
            if(left) {
                let temp1 = index1-1;
                while(0 <= temp1 && temp1 < 8) {
                    if(this.ocerofield[temp1][index2] === this.turn) {put = true;break;}
                    --temp1;
                }
            }
            if(up) {
                let temp2 = index2-1;
                while(0 <= temp2 && temp2 < 8) {
                    if(this.ocerofield[index1][temp2] === this.turn) {put = true;break;}
                    --temp2;
                }
            }
            if(right) {
                let temp1 = index1+1;
                while(0 <= temp1 && temp1 < 8) {
                    if(this.ocerofield[temp1][index2] === this.turn) {put = true;break;}
                    ++temp1;
                }
            }
            if(down) {
                let temp2 = index2+1;
                while(0 <= temp2 && temp2 < 8) {
                    if(this.ocerofield[index1][temp2] === this.turn) {put = true;break;}
                    ++temp2;
                }
            }
            if(leftup) {
                let temp1 = index1-1;let temp2 = index2-1;
                while(0 <= temp1 && temp1 < 8 && 0 <= temp2 && temp2 < 8) {
                    if(this.ocerofield[temp1][temp2] === this.turn) {put = true;break;}
                    --temp1;--temp2;
                }
            }
            if(rightup) {
                let temp1 = index1+1;let temp2 = index2-1;
                while(0 <= temp1 && temp1 < 8 && 0 <= temp2 && temp2 < 8) {
                    if(this.ocerofield[temp1][temp2] === this.turn) {put = true;break;}
                    ++temp1;--temp2;
                }
            }
            if(leftdown) {
                let temp1 = index1-1;let temp2 = index2+1;
                while(0 <= temp1 && temp1 < 8 && 0 <= temp2 && temp2 < 8) {
                    if(this.ocerofield[temp1][temp2] === this.turn) {put = true;break;}
                    --temp1;++temp2;
                }
            }
            if(rightdown) {
                let temp1 = index1+1;let temp2 = index2+1;
                while(0 <= temp1 && temp1 < 8 && 0 <= temp2 && temp2 < 8) {
                    if(this.ocerofield[temp1][temp2] === this.turn) {put = true;break;}
                    ++temp1;++temp2;
                }
            }
            // console.log(put);

            if(put) {
                if(left) {
                    let putcheck = false;
                    let temp1 = index1-1;
                    while(0 <= temp1 && temp1 < 8) {
                        if(this.ocerofield[temp1][index2] === this.turn) {putcheck = true;break;}
                        --temp1;
                    }
                    temp1 = index1-1;
                    while(putcheck && 0 <= temp1 && temp1 < 8) {
                        if(this.ocerofield[temp1][index2] === this.turn) {break;}
                        this.ocerofield[temp1][index2] = this.turn; 
                        --temp1;
                    }
                }
                if(up) {
                    let temp2 = index2-1;
                    while(0 <= temp2 && temp2 < 8) {
                        if(this.ocerofield[index1][temp2] === this.turn) {break;}
                        this.ocerofield[index1][temp2] = this.turn; 
                        --temp2;
                    }
                }
                if(right) {
                    let temp1 = index1+1;
                    while(0 <= temp1 && temp1 < 8) {
                        if(this.ocerofield[temp1][index2] === this.turn) {break;}
                        this.ocerofield[temp1][index2] = this.turn; 
                        ++temp1;
                    }
                }
                if(down) {
                    let temp2 = index2+1;
                    while(0 <= temp2 && temp2 < 8) {
                        if(this.ocerofield[index1][temp2] === this.turn) {break;}
                        this.ocerofield[index1][temp2] = this.turn; 
                        ++temp2;
                    }
                }
                if(leftup) {
                    let temp1 = index1-1;let temp2 = index2-1;
                    while(0 <= temp1 && temp1 < 8 && 0 <= temp2 && temp2 < 8) {
                        if(this.ocerofield[temp1][temp2] === this.turn) {break;}
                        this.ocerofield[temp1][temp2] = this.turn; 
                        --temp1;--temp2;
                    }
                }
                if(rightup) {
                    let temp1 = index1+1;let temp2 = index2-1;
                    while(0 <= temp1 && temp1 < 8 && 0 <= temp2 && temp2 < 8) {
                        if(this.ocerofield[temp1][temp2] === this.turn) {break;}
                        this.ocerofield[temp1][temp2] = this.turn; 
                        ++temp1;--temp2;
                    }
                }
                if(leftdown) {
                    let temp1 = index1-1;let temp2 = index2+1;
                    while(0 <= temp1 && temp1 < 8 && 0 <= temp2 && temp2 < 8) {
                        if(this.ocerofield[temp1][temp2] === this.turn) {break;}
                        this.ocerofield[temp1][temp2] = this.turn; 
                        --temp1;++temp2;
                    }
                }
                if(rightdown) {
                    let temp1 = index1+1;let temp2 = index2+1;
                    while(0 <= temp1 && temp1 < 8 && 0 <= temp2 && temp2 < 8) {
                        if(this.ocerofield[temp1][temp2] === this.turn) {break;}
                        this.ocerofield[temp1][temp2] = this.turn; 
                        ++temp1;++temp2;
                    }
                }
                this.ocerofield[index1][index2] = this.turn; 
                this.turn = this.turn ? 0 : 1;
                this.next = this.next ? 0 : 1;
                app.$forceUpdate();
            }
        },
    },
})
