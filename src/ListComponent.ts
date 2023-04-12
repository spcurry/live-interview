export class ListComponent {
    constructor(public element: HTMLElement) {

        // Creating Our XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Making our connection
        var url = 'http://localhost:8000/customers';
        xhr.open("GET", url, true);

        // function execute after request is successful
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const respJson = JSON.parse(this.responseText);
                console.log(respJson);

                let html = `<ul>`;
                respJson.forEach((c: any) => {
                   html += `<li>${JSON.stringify(c)}</li>`;
                });

                element.innerHTML = html;
            }
        }
        // Sending our request
        xhr.send();
    }
}