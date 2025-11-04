/**
 * Return the request for get all items
 * @returns {XMLHttpRequest}
 */
export function getItems(){
    const request = new XMLHttpRequest();
    request.open("GET","http://localhost:3000/items");
    request.send();
    return request;
}