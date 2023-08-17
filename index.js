const returnFirstTwoDrivers = function (array) {
    // let newArr = [];
    // for(let i = 0; i < array.length; i++) {
    //     if(i <= 1) {
    //         newArr.push(array[i]);
    //     }
    // }
    // return newArr;


    /////or simple one-liner:
    return ([array[0], array[1]]);
}

const returnLastTwoDrivers = function (array) {
    // let newArr = [];
    // for(let i = 0; i <= array.length - 1; i++) {
    //     if(i === array.length - 2) {
    //         newArr.push(array[i]);
    //     } else if(i === array.length - 1) {
    //         newArr.push(array[i]);
    //     }
    // }
    // return newArr;


    /////or simple one-liner:
    return ([array[array.length - 2], array[array.length - 1]]);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function (fare) {
        return num * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnTwoDrivers) {
    return returnTwoDrivers(drivers);
}
