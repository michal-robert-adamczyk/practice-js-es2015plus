import {files} from './data.js';

const ArrayToSum = []


const unitsChanger = (ProtoUnit, sizeOfUnit) => {
    let converter=1;
    if(ProtoUnit==='KB')converter=1024;
    if(ProtoUnit==='MB')converter=1024*1024;
    if(ProtoUnit==='GB')converter=1024*1024*1024;
    let FinalUnit = sizeOfUnit*converter;
    ArrayToSum.push(FinalUnit); 
}


files.forEach(element => {
    unitsChanger(element.size.unit, element.size.length);

});

const sum = ArrayToSum.reduce((prev, n) => {
    return prev + n;
 });
 console.log(sum);