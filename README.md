## A set of functions to handle date values in various shapes ## 
_(version 1.0.0)_

* ### Functions are grouped into: ###

    * __set*()__, to create various value shapes expressing a date:

        * __setDateObj( value )__, a simple object with integer values ({ year:, month:, day: })

        * __setDateArray( value )__, an array of integers ([ yaer, month, day ])

        * __setDateStr( value )__, a string in form of 'YYYYMMDD' (where YYYY is for year, MM for month, DD for day)

        * __setDateRepr( value, pattern )__ a representation string in form of 'DD/MM/YYYY' (by default but also customizable to other patterns)

        * __setDateDate( value )__ an instance of JS Date class

    * __get*()__, to evaluate and retrieve the date values from the above shapes:

        * __getDateObj( value )__, date values from an object ({ year:, month:, day: })

        * __getDateArray( value )__, date values from an array of integers ([ yaer, month, day ])

        * __getDateStr( value )__, date values from a string in form of 'YYYYMMDD'

        * __getDateRepr( value, pattern )__, date values from a representation string like 'DD/MM/YYYY'

        * __getDateDate( value )__, date values from an instance of JS Date class

    * __op*()__, to compare two date values:

        * __opEqualTo( date1, date2 )__, the one date should be equal to the other

        * __opNotEqualTo( date1, date2 )__, the one date should not be equal to the other

        * __opGreaterThan( date1, date2 )__, the first date should be greater than the second

        * __opGreaterThanEqualTo( date1, date2 )__, the first date should be greater than or equal to the second

        * __opLessThan( date1, date2 )__, the first date should be less than the second

        * __opLessThanEqualTo( date1, date2 )__, the first date should be less than or equal to the second

    * __calc*()__, to calculate new date or related values:

        * __calcDayOfWeek( date )__, the position of a date in the days sequence of the week (from 1 to 7, monday to sunday)

        * __calcDayOfYear( date )__, the position of a date in the days sequence of the year (from 1 to 365/366)

        * __calcDateByDayOfYear( day, year )__, the date according to a day in the sequence of a year (from 1 to 365/366)

        * __calcDateByDaysAddition( from, days )__, the date according to a starting date and a positive or negative number of days to be added

        * __calcWeeksOfRange( from, till )__, the weeks according to a range of days that are placed within

    * __count*()__, to count date related values

        * __countDaysOfMonth( month, year )__, the number of days of a month

        * __countDaysOfYear( year )__, the number of days of a year

        * __countDaysOfRange( from, till )__, the number of days of a date range including the starting and ending limits

    * __is*()__, to validate date related values:

        * __isYear( value )__, if a value is an integer expressing a year (by default from 1900 to 2099 but also customizable to other values)

        * __isLeapYear( value )__, if a value is an integer expressing a leap year

        * __isMonth( month, year )__, if a value is an integer expressing a month (from 1 to 12)

        * __isDate( year, month, day )__, if a series of values expressing a date

    * __config.set*()__, to customize general parameters:

        * __config.setYearRange( from, till )__, the range of valid years (by default from 1900 to 2099)

        * __config.setReprPattern( pattern )__, the pattern for the date representation (by default DD/MM/YYYY)

    * __config.get*()__, to retrieve general parameters:

        * __config.getYearRange()__, the range of valid years

        * __config.getReprPattern()__, the pattern for the date representation


_Repository [here](https://github.com/giannisclipper/date)_

_Documentation [here](https://giannisclipper.github.io/date/)_
