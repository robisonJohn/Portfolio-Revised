/*
Filter Function

Science Fiction
Computer Science
Mathematics and Physics
Business
Social Sciences
Other Media Forms
*/

export const filterScienceFiction = arr => arr.filter(element => element.category_name === 'Science Fiction')

export const filterComputerScience = arr => arr.filter(element => element.category_name === 'Computer Science')

export const filterMathematicsAndPhysics = arr => arr.filter(element => element.category_name === 'Mathematics and Physics')

export const filterBusiness = arr => arr.filter(element => element.category_name === 'Business')

export const filterSocialSciences = arr => arr.filter(element => element.category_name === 'Social Sciences')

export const filterAlternativeMedia = arr => arr.filter(element => element.category_name === 'Other Media Forms')