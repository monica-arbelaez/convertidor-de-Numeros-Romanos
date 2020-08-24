function convertToRoman(num) {
    const numObj = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
    };
//    guarda la respuesa
    let romanNum = '';
//   devuelve un array al reves 
    const decimalKeys = Object.keys(numObj).reverse();
    // mientras cada objeto de llave sea menor o igual
    // al objeto, la variable será el número de la clave
    decimalKeys.forEach(i => {
      while (i <= num){
        romanNum += numObj[i];
        num -= i;
      }
    });
  
    return romanNum;
}

  let romanos = document.getElementById("romanos");
    romanos.addEventListener("click", () => {
    document.getElementById("respuesta").innerHTML = `<p>${convertToRoman(
    // devuelve una cadena que representa el valor que se desea convertir.   
    parseInt(document.getElementById("romanos_number").value)
  )}</p>`;
});
