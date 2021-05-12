A set of functions handling date values.

Date values could be expressed as:

dateObj: A simple object with integers in the form of { year, month, day }
dateArr: An array with integers in the form of [ yaer, month, day ]
dateStr: A string in the form of 'YYYYMMDD' (YYYY for the year, MM for the month, DD for the day)
dateRepr: A string in the form of 'DD/MM/YYYY' (as the default but flexible to customized to something else)  
dateDate: An instance of JS Date()

set* functions are used to create the supported date forms

get* functions are used to evaluate the supported date forms

op* functions are used to perform comparing operations between two date values (no matter the form is each of them)

calc* functions are used to calculate new date related values based to given parameters

count* functions are used to count date related values based to given parameters

is* functions are user to validate date related values

custom.set* are used to customize general paramenters

custom.get* are used to access genereal parameters