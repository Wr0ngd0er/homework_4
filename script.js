const student = "Бондаренко Максим Владиславович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...

    function throwRandomError(chance) {
        let RandomGet = Math.random(1).toFixed(1);
        if (chance >1 && chance <0){
            throw new Error('Шанс должен быть от $(0) до $(1)');
        }
        if(RandomGet <= chance){
            throw new Error("Ой, что-то сломалось");
        }
    }

try{
    throwRandomError(0.2);
    console.log('Всё в порядке, приложение работает в штатном режиме')
}
catch(error){
    console.log("Произошла ошибка, пожалуйста перезагрузите страницу");
    console.log(error);
}