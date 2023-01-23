let submit_btn = document.getElementById('submit_btn')
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
            url: url
            ,
            type: selectedMethod,
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.log(err);
            }
        })

    }
}