        function abrirJanela(obj)
        {
           document.getElementById("mensagem").innerHTML="Janela Aberta";           
            obj.src= "./Janela Aberta.png";
        }

        function fecharJanela(obj)
        {
            document.getElementById("mensagem").innerHTML = "Abra a Janela";
            obj.src= "./Janela Fechada.png";
        }

        function quebrarJanela(obj)
        {
            document.getElementById("mensagem").innerHTML = "Janela Quebrada"
            obj.src= "./Janela Quebrada.png";
        }        