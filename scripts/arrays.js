let persons = ['John',
               'Favo',
               'Elise',
               'Alice'];
let salaries = ['12000',
                '13000',
                '14000',
                '15000'];

$(document).ready(function() {
    $('#personName').focus();
    $('#addSalary').click(function() {    
        $.fn.addSalary();
    });

    $('#displayResults').click(function() {
        $.fn.displayResults();
    });

    $('#displaySalary').click(function() {
        $.fn.displaySalary();
    });
});

$.fn.addSalary = function(){
    let personToAdd = $('#personName').val();
    let personToAddSalary = $('#personSalary').val();
    console.log(personToAddSalary)

    if (personToAdd == null || personToAdd == '') {
        alert('Please Enter a valid person name.');
    } else if (personToAddSalary == null || personToAddSalary == '') {
        alert('Please Enter a valid salary.');
    } else {
        persons.push(personToAdd);
        salaries.push(personToAddSalary);
    }
    $('#personName').focus();
};

$.fn.displayResults = function(){
    let average = 0;
    let largestSalary = parseInt(salaries[0]);
    for (let i = 0; i < salaries.length; i++) {
        average += parseInt(salaries[i]);
        if (largestSalary < parseInt(salaries[i])) {
            largestSalary = salaries[i];
        }
    }
    $('#results').html('<h1>Average: ' + average + '</h1><p>Largest Salary: ' + largestSalary + '</p>' )
};

$.fn.displaySalary = function(){
    let htmlString = '<table><tr><th>Person</th><th>Salary</th></tr>';
    for (let i = 0; i < persons.length; i++) {
        htmlString += '<tr><td>' + persons[i] + '</td><td>' + salaries[i] + '</td></tr>'
    }
    $('#results').html(htmlString);
};
