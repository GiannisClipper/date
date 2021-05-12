import config from './config.js';

import isYear from './isYear.js';
import isLeapYear from './isLeapYear.js';
import isMonth from './isMonth.js';
import isDate from './isDate.js';

import getDateObj from './getDateObj.js';
import getDateStr from './getDateStr.js';
import getDateRepr from './getDateRepr.js';
import getDateArr from './getDateArr.js';
import getDateDate from './getDateDate.js';

import setDateObj from './setDateObj.js';
import setDateStr from './setDateStr.js';
import setDateRepr from './setDateRepr.js';
import setDateArr from './setDateArr.js';
import setDateDate from './setDateDate.js';

import opEqualTo from './opEqualTo.js';
import opNotEqualTo from './opNotEqualTo.js';
import opGreaterThan from './opGreaterThan.js';
import opGreaterThanEqualTo from './opGreaterThanEqualTo.js';
import opLessThan from './opLessThan.js';
import opLessThanEqualTo from './opLessThanEqualTo.js';

import countDaysOfYear from './countDaysOfYear.js';
import countDaysOfMonth from './countDaysOfMonth.js';
import countDaysOfRange from './countDaysOfRange.js';

import calcDayOfWeek from './calcDayOfWeek.js';
import calcDayOfYear from './calcDayOfYear.js';
import calcDateByDayOfYear from './calcDateByDayOfYear.js';
import calcDateByDaysAddition from './calcDateByDaysAddition.js';
import calcWeeksOfRange from './calcWeeksOfRange.js';

export default {
    config,
    isYear, isLeapYear, isMonth, isDate,
    setDateObj, setDateStr, setDateRepr, setDateArr, setDateDate,
    getDateObj, getDateStr, getDateRepr, getDateArr, getDateDate,
    opEqualTo, opNotEqualTo, opGreaterThan, opGreaterThanEqualTo, opLessThan, opLessThanEqualTo,
    countDaysOfMonth, countDaysOfYear, countDaysOfRange,
    calcDayOfWeek, calcDayOfYear, calcDateByDayOfYear, calcDateByDaysAddition, calcWeeksOfRange
};

export {
    config,
    isYear, isLeapYear, isMonth, isDate,
    setDateObj, setDateStr, setDateRepr, setDateArr, setDateDate,
    getDateObj, getDateStr, getDateRepr, getDateArr, getDateDate,
    opEqualTo, opNotEqualTo, opGreaterThan, opGreaterThanEqualTo, opLessThan, opLessThanEqualTo,
    countDaysOfMonth, countDaysOfYear, countDaysOfRange,
    calcDayOfWeek, calcDayOfYear, calcDateByDayOfYear, calcDateByDaysAddition, calcWeeksOfRange
};