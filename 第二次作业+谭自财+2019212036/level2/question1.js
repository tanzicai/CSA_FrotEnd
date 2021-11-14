    function readIn() {
        do {
            var message = prompt("请输入要提示的信息！");
            var num = parseInt(message);
        } while (isNaN(num));
        alert(Math.pow(num,2));
    }
    console.log(readIn())