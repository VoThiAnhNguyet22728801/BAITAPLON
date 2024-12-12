function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    if (password !== repassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }
    const user = {
        username: username,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert("Đăng ký thành công!");
    window.location.href = '/account/login.html';
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
