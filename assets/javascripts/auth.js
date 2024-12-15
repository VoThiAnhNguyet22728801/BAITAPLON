function register() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(email)){
        alert("Định dạng email không đúng");
        return;
    }

    if (password !== repassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }
    const user = {
        email: email,
        username: username,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert("Đăng ký thành công!");
    window.location.href = 'account/login.html';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert("Đăng nhập thành công!");
        sessionStorage.setItem('username', username);
        window.location.href = '/'; // Đảm bảo đường dẫn đúng
    } else {
        alert("Sai thông tin đăng nhập!");
    }
}
