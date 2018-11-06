// 1
// принимает строку для поиска
// возвращает массив объектов пользователей GitHub или null, если произошла ошибка
// запрос к GitHub API должен быть асинхронным
// документация: https://developer.github.com/v3/search/#search-users
// использовать fetch
// function loadGitHubUsers (searchString) {}

// 1*
// создать на основе GitHub API компонент поиска пользователей GitHub
// нужен инпут для ввода поисковой строки и кнопка "Найти" для выполнения поиска
// если запрос к GitHub API возвращает объекты пользователей, отобразить имена первых пятерых удобным для вас способом - например, списком
// если по запросу ничего не найдено, отобразить соответствующее уведомление
// если произошла ошибка, отобразить её текст


function loadGitHubUsers (searchString) {
    var content = '';
    try {
        if(typeof searchString !== 'string'){
            throw console.error("Данные некорректны, требуется ввести строку");
        } else {
            fetch(`https://api.github.com/search/users?q=${searchString}`)
                .then(function(res){
                    return res.json()
                })
                .then(function(req){
                    for (var i = 0; i <= 5; i++) {
                        document.querySelector('#result').innerHTML += `<div class="col-md-6">${req.items[i].id}</div><div class="col-md-6">${req.items[i].login}</div>`;
                    }
                })
                .catch(function(error){
                    return error;
                })
        };
    } catch(error) {
        return error;        
    }

}

document.querySelector('#btnHead').addEventListener('click', function(e){
    e.preventDefault();
    loadGitHubUsers(document.querySelector('#name').value);
})




// 2*
// https://www.youtube.com/watch?v=j4_9BZezSUA