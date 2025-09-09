let resgistrarMovimiento =()=>{
    let continuar= true;
    let movimiento=[];
    
    while(continuar){
        
        let nombre= prompt("Ingrese nombre del movimiento: ");
        if(!nombre || nombre.trim() === ""){
            alert("Error, Ingrese correctamente el nombre del movimiento");
            continue;
        }
        
        let tipo = prompt("Ingrese tipo de movimiento: Ingreso / Egreso");
        let tipoNormalizado= tipo.toLowerCase();
        if(!tipo || tipoNormalizado !=="ingreso" && tipoNormalizado !=="egreso") {
            alert("Error; Ingrese correctamente el tipo de movimiento: Ingreso/Egreso");
            continue;
        }
        
        let monto= Number(prompt("Ingrese monto a registrar"));
        if(isNaN(monto) || monto<=0){
            alert("Error, Ingrese nuevamente el monto (debe ser mayor que 0)");
            continue;       
        }
        
        movimiento.push({ nombre, tipo:tipoNormalizado, monto});
        
        console.log("Registro de movimiento");
        console.log(`Nombre del movimiento: ${nombre}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Monto: ${monto}`)
        console.log("------------------------------");
        
        continuar = confirm("¿Continuar registrando movimientos?"); //preguntar si desea seguir 
    }
    
    console.log("Resumen de movimientos: ");
    let totalIngreso= 0;
    let totalEgreso=0;
    
    for(let m of movimiento){
            console.log(`- ${m.nombre} | ${m.tipo} | ${m.monto}`);
            if(m.tipo==="ingreso") totalIngreso += m.monto
            else totalEgreso += m.monto;
        }
    let saldo= totalIngreso-totalEgreso;

    console.log(`\n Cantidad de movimiento: ${movimiento.length}`);
    console.log(`Total de Ingresos es: ${totalIngreso}`);
    console.log(` Total de egresos es ${totalEgreso}`);
    console.log(`\n El saldo actual (ingresos - egresos) es: ${saldo}`);

};
resgistrarMovimiento();

