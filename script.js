async function get_kitty_data(){
    
    const feed = document.querySelector(".feed");
    let get_response_data = await fetch("http://127.0.0.1:8000/cats/")
    let response_data = await get_response_data.json()

    // Итерируеся по элементам массива из response data
    for(key  in response_data){
        // Добавляем html конент с полями из response data в "ленту"
        feed.innerHTML += `
        <div class = "cat_card">
            <ul>
                <li> Имя котика: ${response_data[key].name}</li>
                <li> Цвет: ${response_data[key].color}</li>
                <li>Возраст: ${response_data[key].age}</li>
            <ul/>
        <div/>
        `
    }
}

document.addEventListener("DOMContentLoaded", function(){
    get_kitty_data()
})
