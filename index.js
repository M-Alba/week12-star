const str = '<div><h3>Пользователь: </h3><div><img><span>Иванов Иван</span></div><div>Иванович</div></div>';

function deleteTags(str) {
    const result = str.replace(/( |<([^>]+)>)/ig, "");
    return result;
};

console.log(deleteTags(str));