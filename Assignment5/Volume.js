class CylinderV{
    constructor(radius,hight){
        this.radius=radius;
        this.hight=hight;
    }
    getVC(){
        let vol=this.radius*this.radius*this.hight*(22/7);
        return vol.toFixed(4);
    }
}
class SphereV{
    constructor(radius){
        this.radius=radius;
    }
    getVS(){
        let vol=(4/3)*this.radius*this.radius*this.radius*(22/7);
        return vol.toFixed(4);
    }
}
class ConeV{
    constructor(radius,hight){
        this.radius=radius;
        this.hight=hight;
    }
    getVCone(){
        let vol=(this.radius*this.radius*this.hight*(22/7))/3;
        return vol.toFixed(4);
    }
}
let a=new CylinderV(12,23);
console.log(`Volume of Cylinder is ${a.getVC()}`);
let b=new SphereV(12);
console.log(`Volume of Sphere is ${b.getVS()}`);
let c=new ConeV(12,20);
console.log(`Volume of Sphere is ${c.getVCone()}`);