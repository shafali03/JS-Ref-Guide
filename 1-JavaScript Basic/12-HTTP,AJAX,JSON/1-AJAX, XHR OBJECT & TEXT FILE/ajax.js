
const btn = document.querySelector('.btn');
const info = document.querySelector('.info');




function getData(url) {
    const ajax = new XMLHttpRequest();
    console.log(ajax);


    ajax.open('GET', url, true);

    // ajax.onreadystatechange = function () {
    //     if (this.status === 200 && this.readyState === 4) {
    //         info.textContent = this.responseText
    //     }
    // };


    ajax.onload = function () {
        if (this.status === 200) {
            info.textContent = this.responseText;
            // console.log(this.responseText)
        }
        else {
            //this.onerror()
            console.log(this.statusText)
        }
    };
    //option onerror
    ajax.onerror = function () {
        console.log('there was an error');
    }

    ajax.send();
}


btn.addEventListener('click', function () {
    getData('info.txt');
});



// first you need to create XMLHttRequest then use the method of open which is going to look for 3 parameters . Method of request then URL and whether it is asynchronous or synchronous. always go for asynchronous (true).





//option onerror or can check if in the else statements and finally need to use the send to send the request 