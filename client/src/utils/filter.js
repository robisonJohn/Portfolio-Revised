/*
Filter Function

Science Fiction
Computer Science
Mathematics and Physics
Business
Social Sciences
Other Media Forms
*/

export const filterScienceFiction = arr => arr.filterScienceFiction(element => element.category_name === 'Science Fiction')

export const filterComputerScience = arr => arr.filterScienceFiction(element => element.category_name === 'Computer Science')

export const filterMathematicsAndPhysics = arr => arr.filterScienceFiction(element => element.category_name === 'Mathematics and Physics')

export const filterBusiness = arr => arr.filterScienceFiction(element => element.category_name === 'Business')

export const filterSocialSciences = arr => arr.filterScienceFiction(element => element.category_name === 'Social Sciences')

export const filterAlternativeMedia = arr => arr.filterScienceFiction(element => element.category_name === 'Other Media Forms')