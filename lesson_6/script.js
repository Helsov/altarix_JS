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
    try {
        if(typeof searchString !== 'string'){
            throw document.querySelector('#result').innerHTML = `<tr><td class="danger">Данные некорректны, требуется ввести строку</td></tr>`;
        } else {
            fetch(`https://api.github.com/search/users?q=${searchString}`)
                .then(function(res){
                    return res.json();
                })
                .then(function(req){
                    document.querySelector('#result').innerHTML = `
                    <tr>
                        <td><h5>Id</h5></td>
                        <td><h5>Login</h5></td>
                        <td><h5>Score</h5></td>
                        <td><h5>Avatar</h5></td>
                    </tr>`;
                    for (var i = 0; i <= 5; i++) {
                        document.querySelector('#result').innerHTML += `
                        <tr>
                            <td>${req.items[i].id}</td>
                            <td>${req.items[i].login}</td>
                            <td>${req.items[i].score}</td>
                            <td>
                                <img src="${req.items[i].avatar_url}">
                            </td>
                        </tr>`;
                    }
                })
                .catch(function(error){
                    console.log(error);
                    return document.querySelector('#result').innerHTML = `<tr><td class="danger">По Вашему запросу ничего не найдено</td></tr>`;
                })
        };
    } catch(error) {
        return error;        
    }

}

document.querySelector('#btnHead').addEventListener('click', function(e){
    loadGitHubUsers(document.querySelector('#name').value);
})




// 2*
// https://www.youtube.com/watch?v=j4_9BZezSUA