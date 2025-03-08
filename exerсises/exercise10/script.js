const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const age = plan.age;
        const languages = plan.skills.languages;
        let str = '';
        str += `Мне ${age} и я владею языками:`;
        languages.forEach((element) => str += ` ${element}`.toUpperCase())
        return str;
    }
};

function showExperience(plan) {
    const exp = plan.skills.exp;
    return exp;
}

console.log(showExperience(personalPlanPeter))

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (const key in programmingLangs) {
        str +=  `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));