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

/**
 * Functions to create various value shapes expressing a date.
 * @namespace A.set
 */

/**
 * Functions to evaluate and retrieve the date values from various shapes.
 * @namespace B.get
 */

/**
 * Functions to compare two date values.
 * @namespace C.op
 */

/**
 * Functions to calculate new date or related values.
 * @namespace D.calc
 */

/**
 * Functions to count date related values.
 * @namespace E.count
 */

/**
 * Functions to validate date related values.
 * @namespace F.is
 */

/**
 * Methods to customize or retrieve general parameters.
 * @namespace G.config
 */

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