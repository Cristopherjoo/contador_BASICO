        let contar = 0;
        let contarSpan = document.getElementById("contar");
        let btnMas = document.getElementById("mas");
        let btnMenos = document.getElementById("menos");
        let btnReset = document.getElementById("reset");

        btnMas.addEventListener("click", function () {
            contar++;
            contarSpan.textContent = contar;
            if (contar == 10){
                alert("Hola choro")
               }
        });

        btnMenos.addEventListener("click", function () {
            contar--;
            contarSpan.textContent = contar;
        });

        btnReset.addEventListener("click", function () {
            contar = 0;
            contarSpan.textContent = contar;            
        });
        
      