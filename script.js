let subs = [
    {
        name: "jane",
        score: 95,
        date: "2020-01-24",
        pass: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        pass: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        pass: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        pass: true,
    }
];
// 2
let addSubmission = (array, newName, newScore, newDate) => {
    let newSub = {
        newName: newName,
        newScore: newScore,
        newDate: newDate,
        pass: newScore >= 60,
    }

    array.push(newSub)
};
// 3
let deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};

let findIndex = (array, name) => {
    return array.findIndex((item) => {
        return item.name === name;
    });
};
// 4
deleteSubmissionByName = (array, name) => {
    let index = findIndex(array, name);
    array.splice(index, 1);
};
// 5
let editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
};
// 6
let findSubmissionByName = (array, name) => {
    return array.find((subsarray) => {
        return subsarray.name === name;
    });
};
// 7
let findLowestScore = (array) => {
    let currentLowestObject = array[0];
    array.forEach((sub) => {
        if (sub.score < currentLowestObject.score) {
            currentLowestObject = sub;
        }
    })
    return currentLowestObject;
}
// 8
let findAverageScore = (array) => {
    // let sum = 0;
    // array.forEach((sub) => {
    //     sum += sub.score;
    //     return sum
    // })
    // return sum / array.length;
    let sum = 0
    for (let sub of array) {
        sum += sub.score
    }
    return sum / array.length;
}
// 9
let filterPassing = (array) => {
    let newArray = array.filter((sub) => {
        return sub.pass === true;
    })
    return newArray;
}
// 10
let filter90AndAbove = (array) => {
    let newArray = array.filter((sub) => {
        return sub.score >= 90;
    })
    return newArray;
}