## A set of functions handling date values. ## 
_(trial version, some things left to be done according documentation)_

* ### Date values could be expressed as: ###

    * __dateObj__: A simple object with integers in the form of { year, month, day }

    * __dateArr__: An array with integers in the form of [ yaer, month, day ]

    * __dateStr__: A string in the form of 'YYYYMMDD' (YYYY for the year, MM for the month, DD for the day)

    * __dateRepr__: A string in the form of 'DD/MM/YYYY' (as the default but flexible to customized to something else)  

    * __dateDate__: An instance of JS Date()

* ### Functions are grouped into: ###

    * __set*()__ functions to create the supported date forms

    * __get*()__ functions to evaluate the supported date forms

    * __op*()__ functions to compare two date values, no matter the form of each of them)

    * __calc*()__ functions to calculate new date related values based to given parameters

    * __count*()__ functions to count date related values based to given parameters

    * __is*()__ functions to validate date related values

    * __config.set*()__ methods to customize general paramenters

    * __config.get*()__ methods to retrieve genereal parameters

_More documentation here: https://giannisclipper.github.io/date/_