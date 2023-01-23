let submit_btn = document.getElementById('submit_btn')

let ResponseBody = document.getElementById('ResponseBody')
let RequestBody = document.getElementById('RequestBody')

let statusText = document.getElementById('statusText')
let planText = document.getElementById('planText')

let selecteOption = document.getElementById('SelectBox')
let selectedMethod

selecteOption.onchange = function (e) {
    console.log(e.target.value)
    selectedMethod = e.target.value
}

submit_btn.onclick = function () {
    let url = document.getElementById('urlInput').value.trim()

    console.log('test==>',!!url?'true':'false')
    if (selectedMethod === 'GET' || selectedMethod === 'SET' && !!url) {

        $.ajax({
            url: url,
            type: selectedMethod,
            success: function (response) {
                console.log(response);
                ResponseBody.innerHTML = JSON.stringify(response.data)
                statusText.innerHTMLm = '200'
                planText.innerHTMLm = '200'
            },
            error: function (err) {
                console.log(err);
            }
        })

    }
}