function hideIntroBienvenido() {
  document.querySelector('.introBienvenido').style.display = 'none';
}


function showBienvenido() {
  document.querySelector('.introBienvenido').style.display = 'block';

}

document.querySelector('#btnSaldo').style.display = 'none';
document.querySelector('#Ingresar').style.display = 'none';
document.querySelector('#btnRetirar').style.display = 'none';



let usuarios = [
  { usuario: 'Mariana', password: 'pass1', saldo: 100 },
  { usuario: 'Vale', password: 'pass2', saldo: 20 },
  { usuario: 'Laura', password: 'pass3', saldo: 200 },
];
function Addprofile () {
    let name = document.querySelector('#name').value;
    let pass = document.querySelector('#pass').value;
    let saldo = document.querySelector('#saldo').value;
    if (name === usuarios.inName && pass === usuarios.pass) {
        showBienvenido();
        document.querySelector('.introBienvenido').innerHTML = `Bienvenido ${usuarios.inName}, tu saldo es de ${usuarios.saldo}`;
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}


