let str;    //str type can be any
str = 'Anything';
let boolean = (str as string).endsWith('g');
let alternativeWay = (<string>str).endsWith('g');