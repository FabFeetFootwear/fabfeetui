export class Orders{
    constructor(public cid?:string,
        public pid?:string,
        public coid?:string,
        public oid?:string,
        public deliveryStatus?:string,
        public quantity?:number,
        public orderDate?:Date,
        public price?:number){}
}