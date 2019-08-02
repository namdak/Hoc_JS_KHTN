class HCN {
    constructor(dai, rong) {
        this.CD = dai;
        this.CR = rong;
    }
    CV() {
        return (this.CD + this.CR) * 2;
    }
}
export{HCN};