<html>
<head>
    <script type="text/javascript">
        function somarValores(){
        var s1 = document.getElementById("s1").value;
        var s2 = document.getElementById("s2").value;
        var s3 = parseFloat(s1) + parseFloat(s2);
        alert(s3);
    }
    </script>
</head>
<body>
    <fieldset>
        <legend>Cálculo do somas de números</legend>
        <label>Valor 1:</label>
        <input id="s1" type="text"/>
        <label>Valor 2: </label>
        <input id="s2" type="text"/>
        <button id="somar" onclick="somarValores()">Somar</button>
    </fieldset>
</body>
</html>
