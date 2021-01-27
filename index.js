
const viewModel = {
    //first block
    greeteng:ko.observable('Hello World'),
    textInput: ko.observable(''),
    textP: ko.observable(''),
    isVisible: ko.observable(false),
    isVidible2: ko.observable(true),
    isVisibleLorem: ko.observable(false),

    //seccond block
    firstName: ko.observable(''),
    lastName: ko.observable(''),
    firstNameLastName: 'тут нужно компьютед'
}

// bind к конкретному месту
// ko.applyBindings(viewModel, document.querySelector('.first-block'));

// bind ко всему документу
ko.applyBindings(viewModel);

viewModel.greeteng('I lear ko!');

setTimeout(()=>{
    viewModel.isVisible(!viewModel.isVisible());
}, 5000)

//es 6 и 7 не воспринимает,стрелку и новое обьявление для клика не работает.
function handlerIsVisibleClick() {
    viewModel.isVidible2(!viewModel.isVidible2());
}

viewModel.textInput.subscribe((nevValue)=>{
    console.log(nevValue);
})






