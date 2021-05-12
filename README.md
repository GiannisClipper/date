A set of functions handling date values. 
__(is a trial version, some things left to be done according documentation)__

Date values could be expressed as:

_dateObj_: A simple object with integers in the form of { year, month, day }

_dateArr_: An array with integers in the form of [ yaer, month, day ]

_dateStr_: A string in the form of 'YYYYMMDD' (YYYY for the year, MM for the month, DD for the day)

_dateRepr_: A string in the form of 'DD/MM/YYYY' (as the default but flexible to customized to something else)  

_dateDate_: An instance of JS Date()

_set*_ functions are used to create the supported date forms

_get*_ functions are used to evaluate the supported date forms

_op*_ functions are used to perform comparing operations between two date values (no matter the form is each of them)

_calc*_ functions are used to calculate new date related values based to given parameters

_count*_ functions are used to count date related values based to given parameters

_is*_ functions are user to validate date related values

_config.set*_ are used to customize general paramenters

_config.get*_ are used to access genereal parameters

More documentation here: https://giannisclipper.github.io/date/