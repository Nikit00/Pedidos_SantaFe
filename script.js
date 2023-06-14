function dataPedido(){
    let data = new Date();
    return data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
}

function adicionarItem(){

    document.getElementById('cliente-impressao').innerHTML = document.getElementById('cliente').value;
    document.getElementById('pedido-impressao').innerHTML = document.getElementById('pedido').value;
    document.getElementById('data-auto').innerHTML = dataPedido();

    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let tipo = document.getElementById("tipo").value;

    let lista = document.getElementById("lista").innerHTML

    lista += "<li>" + produto + "    ("+ quantidade + "  " + tipo + ")</li>"

    document.getElementById("lista").innerHTML = lista.toUpperCase();

    produto = document.getElementById("produto").value = null;
    quantidade = document.getElementById("quantidade").value = null;
    
}

function removerItem(){
    let lista = document.getElementById("lista");
    let ultimoItem = lista.querySelector("li:last-child");

    lista.removeChild(ultimoItem);
}

function confirmarPedido(){
    window.print();
}


