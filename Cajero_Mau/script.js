
let usuarios = [
  { usuario: 'Mauricio', password: 'Batman', saldo: 100 },
  { usuario: 'Vale', password: 'pass2', saldo: 20 },
  { usuario: 'Laura', password: 'pass3', saldo: 200 },
];


document.querySelector('.introBienvenido').style.display = 'none';
document.querySelector('#btnSaldo').style.display = 'none';
document.querySelector('#btnIngresar').style.display = 'none';
document.querySelector('#btnRetirar').style.display = 'none';




document.querySelector('.entrada').onclick = () => {
function Addprofile () {
    let usuarios = document.querySelector('.inName').value;
    let pass = document.querySelector('.passwor').value;
    let saldo = usuarios.dalso;/* document.querySelector('.saldo').value; */
    if (usuarios === usuarios.inName && pass === usuarios.pass) {
        showBienvenido();
        document.querySelector('.introBienvenido').innerHTML = `Bienvenido ${usuarios.inName}, tu saldo es de ${usuarios.saldo}`;
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
}
function showBienvenido() {
  document.querySelector('.introBienvenido').style.display = 'block';

}