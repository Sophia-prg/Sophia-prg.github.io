const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const RUBY_Lipstick = urlParams.get('RUBY_Lipstick')
console.log(RUBY_Lipstick);

const RUBY_Ring = urlParams.get('RUBY_Ring')
console.log(RUBY_Ring);

const RUBY_Shampoo = urlParams.get('RUBY_Shampoo')
console.log(RUBY_Shampoo);

const RUBY_Makeup = urlParams.get('RUBY_Makeup')
console.log(RUBY_Makeup);

const RUBY_Blush = urlParams.get('RUBY_Blush')
console.log(RUBY_Blush);

const RUBY_Necklace = urlParams.get('RUBY_Necklace')
console.log(RUBY_Necklace);

const RUBY_Blender = urlParams.get('RUBY_Blender')
console.log(RUBY_Blender);

const RUBY_Perfume = urlParams.get('RUBY_Perfume')
console.log(RUBY_Perfume);

if (RUBY_Lipstick > 0 || RUBY_Ring > 0 || RUBY_Shampoo > 0 || RUBY_Makeup > 0 || RUBY_Necklace > 0|| RUBY_Blender > 0 || RUBY_Perfume > 0 || RUBY_Blush > 0 ) {
    let ordercontainer = document.querySelector('.order__container');
    let cart_html = '';
    if ( RUBY_Lipstick > 0) {
        cart_html+= '<div class=`RUBY_Lipstick`> </div>'
    }
    if ( RUBY_Ring > 0) {
        cart_html+= '<div class=`RUBY_Ring`> </div>'
    }
    if ( RUBY_Shampoo > 0) {
        cart_html+= '<div class=`RUBY_Shampoo`> </div>'
    }
    if ( RUBY_Makeup > 0) {
        cart_html+= '<div class=`RUBY_Makeup`> </div>'
    }
    if ( RUBY_Blush > 0) {
        cart_html+= '<div class=`RUBY_Blush`> </div>'
    }
    if ( RUBY_Necklace > 0) {
        cart_html+= '<div class=`RUBY_Necklace`> </div>'
    }
    if ( RUBY_Blender > 0) {
        cart_html+= '<div class=`RUBY_Blender`> </div>'
    }
    if ( RUBY_Perfume > 0) {
        cart_html+= '<div class=`RUBY_Perfume`> </div>'
    }
    let orderTotal = (5 * RUBY_Lipstick) + (10 * RUBY_Ring) + (25 * RUBY_Shampoo) + (45 * RUBY_Makeup) + (5 * RUBY_Blush) + (35 * RUBY_Necklace) + (5 * RUBY_Blender) + (15 * RUBY_Perfume);
    let lipstickTotal = (5 * RUBY_Lipstick); 
    let ringTotal = (10 * RUBY_Ring);
    let shampooTotal = (25 * RUBY_Shampoo);
    let makeupTotal = (45 * RUBY_Makeup);
    let blushTotal = (5 * RUBY_Blush);
    let necklaceTotal = (35 * RUBY_Necklace);
    let blenderTotal = (5 * RUBY_Blender);
    let perfumeTotal = (15 * RUBY_Perfume);
    ordercontainer.innerHTML = `<div class="order__flex"> 
   
<div>
    <h1> YOUR CART:</h1> <br>
     <h1> Ruby-Lipstick ( ${RUBY_Lipstick} ) = $${lipstickTotal}
      <br> 
      Ruby-Ring ( ${RUBY_Ring} ) = $${ringTotal} 
      <br> 
      Ruby-Shampoo ( ${RUBY_Shampoo} ) = $${shampooTotal} 
      <br> 
      Ruby-Makeup ( ${RUBY_Makeup} ) = $${makeupTotal} 
      <br> 
      Ruby-Blush ( ${RUBY_Blush} ) 
      = $${blushTotal} 
      <br>
      Ruby-Necklace ( ${RUBY_Necklace} ) = $${necklaceTotal} 
      <br> 
      Ruby-Blender ( ${RUBY_Blender} ) = $${blenderTotal}
      <br> 
      Ruby-Perfume ( ${RUBY_Perfume} ) = $${perfumeTotal} 
      <br> ___________________________
      <br> 
      TOTAL = $${orderTotal} USD  </h1> 
       <div class="card__brand">
  <img src="images/visa.jpg" alt="pic" />
  <img src="images/discover.jpg" alt="pic" />
   <img src="images/swift.jpg" alt="pic" />
</div>
</div>
</div>

<div class="order__footer">
    <img src="images/check.svg" alt="pic" id="main__img" />
</div>
 <!--<button class="order__btn"><a href="/index.html"> GO BACK TO HOME </a></button> -->
 
 <!-- Paying for order -->
  <div>
    <label for="name"> Name On Card: </label>
    <input type="text" id="name" name="name" placeholder="e.g., Sara Tin" inputmode="text"  minlength="3"  />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="e.g, vf3xwz0@gmail.com ">
  </div>
  <div>
    <label for="creditCardNumberInput"> Credit Card Number: </label>
    <input type="tel" id="creditCardNumberInput" inputmode="numeric" pattern="[0-9]*" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" autocomplete="cc-number" 
    creditCardNumberInput="creditCardNumberInput">
  </div>
  <div>
    <label for="security"> Security Code (3-4 digits): </label>
    <input type="text" id="security" inputmode="numeric" pattern="[0-9]{3,4}" maxlength="4" placeholder="XXXX"  security="security">
  </div>
   <div>
    <label for="Address"> Your Address: </label>
    <input type="text" id="Address" Address="Address" placeholder="e.g. 1234 Claire St." inputmode="text"/>
  </div>
  <div>
    <button onclick="openModal()">Submit</button>
  </div>` ;

} 

const nameInput = document.getElementById("name");
if (nameInput) {
  nameInput.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
}

var modal = document.getElementById("myModal");
var close = document.getElementById("close");

function openModal() {
    modal.style.display= "block";
    var Name = document.getElementById("name");
    document.getElementById("modalName").innerHTML = Name.value;
    document.getElementById("name").value = ``;
     var Address = document.getElementById("Address");
    document.getElementById("modalAddress").innerHTML = Address.value;
    document.getElementById("Address").value = ``;
      /*var Email = document.getElementById("email");
    document.getElementById("modalAddress").innerHTML = Email.value; */
    document.getElementById("email").value = ``;
     document.getElementById("creditCardNumberInput").value = ``;
      document.getElementById("security").value = ``;
 

}

close.onclick = function() {
    modal.style.display ="none";
}

document.addEventListener('DOMContentLoaded', function() {
    const creditCardInput = document.getElementById('creditCardNumberInput');

    creditCardInput.addEventListener('input', function(event) {
        // 1. Remove any non-numeric characters from the input value
        let rawValue = event.target.value.replace(/\D/g, '');

        // 2. Add spaces every 4 digits (basic formatting)
        let formattedValue = '';
        for (let i = 0; i < rawValue.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' '; // Using space for simplicity, dashes are also an option
            }
            formattedValue += rawValue[i];
        }

        // 3. Update the input field with the formatted value
        event.target.value = formattedValue;
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const securityInput = document.getElementById('security');
   
 securityInput.addEventListener('input', function(event) {
        // 1. Remove any non-numeric characters from the input value
        let rawValue = event.target.value.replace(/\D/g, '');

         let formattedValue = '';
        for (let i = 0; i < rawValue.length; i++) {
            formattedValue += rawValue[i];
        }
        
        event.target.value = formattedValue;
})
});

