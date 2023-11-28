"use strict";

(() => {

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    const langGreaterThan3 = users.filter(language => language.languages.length >= 3);
    console.log(langGreaterThan3);

    const userEmail = users.map(email => email.email);
    console.log(userEmail);

    const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
    const avg = totalYears / users.length;
    console.log(totalYears);
    console.log(avg);

    const longestEmail = users.reduce((longEmail, user) => (longEmail.length > user.email.length) ? longEmail : user.email, "");
    console.log(longestEmail);

    const instructorList = users.reduce((str, user , i) => (i === users.length - 1) ? `${str} ${user.name}.` : `${str} ${user.name},`  , "Your instructors are:");
    console.log(instructorList);

})();
