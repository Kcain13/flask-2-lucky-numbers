function snakeToCamel(snakeCaseString) {
    // reg expression to find underscores followed by lowercase letters and replaces them with the uppercase version of the letter.
    // `replace` function takes a callback that converts the matched letter to uppercase
    return snakeCaseString.replace(/_([a-zA-Z])/g, function (match, group1) {
        return group1.toUpperCase();
    });
}

const snakeCaseString = "awesome_sauce";
const camelCaseString = snakeToCamel(snakeCaseString);
console.log(camelCaseString); // Output: awesomeSauce

