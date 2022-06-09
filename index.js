// Code your solution in this file!


function distanceFromHqInBlocks(pickUpLocation){
    return Math.abs(pickUpLocation-42);
}
console.log(distanceFromHqInBlocks(50));

function  distanceFromHqInFeet(pickUpLocation){
    return (Math.abs(pickUpLocation-42))*264;
}
console.log(distanceFromHqInFeet(50));


function distanceTravelledInFeet(start,destination){
    return (Math.abs((destination-start)))*264;
}
console.log(distanceTravelledInFeet(38,34));

let  travelledInFeet;
function  calculatesFarePrice(start, destination){
    travelledInFeet = (Math.abs((destination-start)))*264;
    if (travelledInFeet < 400){
        return 0;
    }
    if (travelledInFeet > 400 && travelledInFeet <= 2000){
        return 2.56;
    }
    if (travelledInFeet > 2000 && travelledInFeet < 2500){
        return 25;
    }
    if (travelledInFeet => 2500){
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(38,34));
