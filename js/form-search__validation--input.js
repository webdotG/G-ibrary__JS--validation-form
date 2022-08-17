const searchInput = document.getElementById('form-search__input');
const errorTooltip = document.getElementById('form-search__error-tooltip');
const formSearch = document.getElementById("form-search");
const forbidenSymbols = '!@#$%^&*()';

let isSearchValid = true;
let searchValue = '';

async function handleForm(event) {
    if (isSearchValid) {
        console.log('Запрос отправлен!!!');
    }
    event.preventDefault();
}
formSearch.addEventListener('submit', handleForm);

function validate(event) {
    searchValue = event.target.value;
    errorTooltip.style.display = 'none';
    isSearchValid = true;

    let i = forbidenSymbols.length;

    while(i--) {
        if (searchValue.indexOf(forbidenSymbols.charAt(i)) !== -1 || (searchValue.length < 4 || searchValue.length > 12)) {
            isSearchValid = false
            errorTooltip.style.display = 'block';
            searchInput.className = "form-search__input error";
        }
    }
    if ( event.target.value === "") {
        errorTooltip.style.display = 'none';
    }
}

searchInput.addEventListener('keyup', validate);