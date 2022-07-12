export const items_departement = [
    {
        id: 1,
        name: 'Tous'
    }, {
        id: 2,
        name: 'Didactique des disciplines'
    },
    {
        id: 3,
        name: 'Enseignements fondamentaux en éducation'
    },
    {
        id: 4,
        name: 'Education specialisee'
    },
];

export const items_type_doc = [
    {
        id: 1,
        name: 'Tous'
    }, {
        id: 2,
        name: 'memoire'
    },
    {
        id: 3,
        name: 'these'
    }
];

const years = function (startYear) {
    let currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;
    let i = 2;
    while (startYear <= currentYear) {
        years.push({ id: i++, name: startYear++ });
    }

    return [{ id: 1, name: 'Toutes' }].concat(years);
}

export const items_annee = years(2016);



