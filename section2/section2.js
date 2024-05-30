let section2_DOM = document.querySelector(".section2");

section2_DOM.innerHTML= `
<body>
    <div class="seccion2">
        <h2>Texto</h2>
        <table>
            <tr>
                <th>Etiqueta</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td>&lt;html&gt;</td>
                <td>Define el documento HTML</td>
            </tr>
            <tr>
                <td>&lt;head&gt;</td>
                <td>Contiene meta-información sobre el documento</td>
            </tr>
            <tr>
                <td>&lt;title&gt;</td>
                <td>Especifica el título del documento</td>
            </tr>
            <tr>
                <td>&lt;body&gt;</td>
                <td>Define el cuerpo del documento</td>
            </tr>
            <tr>
                <td>&lt;h1&gt; - &lt;h6&gt;</td>
                <td>Encabezados HTML, del más grande al más pequeño</td>
            </tr>
            <tr>
                <td>&lt;p&gt;</td>
                <td>Define un párrafo</td>
            </tr>
            <tr>
                <td>&lt;a&gt;</td>
                <td>Define un hipervínculo</td>
            </tr>
        </table>
    </div>
</body>

`;
