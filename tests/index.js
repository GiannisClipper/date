import { test_isInteger } from './isInteger.js';
import { test_isString } from './isString.js';
import { test_isYear } from './isYear.js';
import { test_isLeapYear } from './isLeapYear.js';
import { test_isMonth } from './isMonth.js';
import { test_isDate } from './isDate.js';
import { test_isDateArr } from './isDateArr.js';
import { test_yearDays } from './yearDays.js';
import { test_monthDays } from './monthDays.js';
import { test_dayOfYear } from './dayOfYear.js';
import { test_joinYYYYMMDD } from './joinYYYYMMDD.js';
import { test_splitYYYYMMDD } from './splitYYYYMMDD.js';
import { test_countDays } from './countDays.js';
import { test_dayOfWeek } from './dayOfWeek.js';
import { test_isDayOfYear } from './isDayOfYear.js';
import { test_dateOfYear } from './dateOfYear.js';

console.log( 'Testing isInteger...' );
test_isInteger();

console.log( 'Testing isString...' );
test_isString();

console.log( 'Testing isYear...' );
test_isYear();

console.log( 'Testing isLeapYear...' );
test_isLeapYear();

console.log( 'Testing isMonth...' );
test_isMonth();

console.log( 'Testing isDate...' );
test_isDate();

console.log( 'Testing isDateArr...' );
test_isDateArr();

console.log( 'Testing yearDays...' );
test_yearDays();

console.log( 'Testing monthDays...' );
test_monthDays();

console.log( 'Testing dayOfYear...' );
test_dayOfYear();

console.log( 'Testing joinYYYYMMDD...' );
test_joinYYYYMMDD();

console.log( 'Testing splitYYYYMMDD...' );
test_splitYYYYMMDD();

console.log( 'Testing countDays...' );
test_countDays();

console.log( 'Testing dayOfWeek...' );
test_dayOfWeek();

console.log( 'Testing isDayOfYear...' );
test_isDayOfYear();

console.log( 'Testing dateOfYear...' );
test_dateOfYear();

