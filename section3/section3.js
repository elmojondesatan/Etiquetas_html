let section3_DOM = document.querySelector(".section3");

section2_DOM.innerHTML= `
<h1>Formulario sobre Gramática HTML</h1>

<div class="form-group">
    <label for="nombre">Nombre:</label>
    <textarea id="nombre" name="nombre" rows="1" required></textarea>
</div>

<div class="form-group">
    <label for="email">Correo Electrónico:</label>
    <input type="email" id="email" name="email" required>
</div>

<div class="form-group">
    <label for="conocimiento">Nivel de Conocimiento en HTML:</label>
    <select id="conocimiento" name="conocimiento" required>
        <option value="">Seleccione uno...</option>
        <option value="principiante">Principiante</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
    </select>
</div>

<div class="form-group">
    <label>¿Qué etiquetas HTML se usan para crear un formulario? (Selecciona todas las que apliquen):</label>
    <div>
        <input type="checkbox" id="opcion1" name="etiquetas" value="form">
        <label for="opcion1">&lt;form&gt;</label>
    </div>
    <div>
        <input type="checkbox" id="opcion2" name="etiquetas" value="input">
        <label for="opcion2">&lt;input&gt;</label>
    </div>
    <div>
        <input type="checkbox" id="opcion3" name="etiquetas" value="div">
        <label for="opcion3">&lt;div&gt;</label>
    </div>
    <div>
        <input type="checkbox" id="opcion4" name="etiquetas" value="label">
        <label for="opcion4">&lt;label&gt;</label>
    </div>
    <div>
        <input type="checkbox" id="opcion5" name="etiquetas" value="button">
        <label for="opcion5">&lt;button&gt;</label>
    </div>
</div>

<div class="form-group">
    <label for="comentarios">Comentarios sobre HTML:</label>
    <textarea id="comentarios" name="comentarios" rows="4" required></textarea>
</div>

<div class="form-group">
    <button type="submit">Enviar</button>
</div>
</form>
</section>
<script>
let section3_DOM = document.querySelector(".section3");
section3_DOM.innerHTML += `;