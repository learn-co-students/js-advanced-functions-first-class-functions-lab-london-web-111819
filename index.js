// Code your solution in this file!
const returnFirstTwoDrivers = arr => arr.slice(0,2)
const returnLastTwoDrivers = arr => arr.slice(-2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = int => fare => int * fare
const fareDoubler = fare => fare * 2
const fareTripler = fare => fare * 3
const selectDifferentDrivers = (array, func) => {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)
    } else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array)
    }
}