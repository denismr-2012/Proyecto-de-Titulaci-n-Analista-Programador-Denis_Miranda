function login() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (usuario === "admin" && clave === "1234") {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

function mostrar(seccion) {
  const contenido = document.getElementById("contenido");

  if (seccion === "stock") {
    contenido.innerHTML = `
      <h3>Gestión de Stock</h3>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Sucursal</th>
          </tr>
        </thead>
        <tbody id="tablaStock"></tbody>
      </table>
      <button onclick="actualizarStock()">Actualizar Stock</button>
    `;
    cargarStock();
  } else if (seccion === "traslado") {
    contenido.innerHTML = `
      <h3>Registrar Traslado</h3>
      <form id="formTraslado">
        <label for="origen">Sucursal Origen:</label>
        <input type="text" id="origen" required>

        <label for="destino">Sucursal Destino:</label>
        <input type="text" id="destino" required>

        <label for="producto">Producto:</label>
        <input type="text" id="producto" required>

        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" required>

        <button type="button" onclick="registrarTraslado()">Registrar</button>
      </form>
      <div id="mensajeTraslado"></div>
    `;
  } else if (seccion === "reportes") {
    contenido.innerHTML = `
      <h3>Reportes de Traslados</h3>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody id="tablaReportes"></tbody>
      </table>
    `;
    cargarReportes();
  }
}

function cargarStock() {
  const datos = [
    { codigo: "A001", producto: "Filtro de aceite", cantidad: 25, sucursal: "Valparaíso" },
    { codigo: "A002", producto: "Bujía", cantidad: 40, sucursal: "Viña del Mar" },
    { codigo: "A003", producto: "Pastillas de freno", cantidad: 15, sucursal: "Quilpué" }
  ];

  const tabla = document.getElementById("tablaStock");
  tabla.innerHTML = datos.map(item => `
    <tr>
      <td>${item.codigo}</td>
      <td>${item.producto}</td>
      <td>${item.cantidad}</td>
      <td>${item.sucursal}</td>
    </tr>
  `).join("");
}

function actualizarStock() {
  alert("Stock actualizado correctamente ");
}

function registrarTraslado() {
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const producto = document.getElementById("producto").value;
  const cantidad = document.getElementById("cantidad").value;

  if (origen && destino && producto && cantidad > 0) {
    document.getElementById("mensajeTraslado").innerHTML =
      `<p style="color:green;">Traslado registrado: ${cantidad} ${producto} de ${origen} a ${destino}</p>`;
  } else {
    document.getElementById("mensajeTraslado").innerHTML =
      `<p style="color:red;">Por favor completa todos los campos correctamente.</p>`;
  }
}

function cargarReportes() {
  const datos = [
    { fecha: "12-07-2026", producto: "Filtro de aceite", cantidad: 10, origen: "Valparaíso", destino: "Viña del Mar", estado: "Completado" },
    { fecha: "11-07-2026", producto: "Bujía", cantidad: 20, origen: "Quilpué", destino: "Valparaíso", estado: "Pendiente" },
    { fecha: "10-07-2026", producto: "Pastillas de freno", cantidad: 5, origen: "Viña del Mar", destino: "Quilpué", estado: "Completado" }
  ];

  const tabla = document.getElementById("tablaReportes");
  tabla.innerHTML = datos.map(item => `
    <tr>
      <td>${item.fecha}</td>
      <td>${item.producto}</td>
      <td>${item.cantidad}</td>
      <td>${item.origen}</td>
      <td>${item.destino}</td>
      <td>${item.estado}</td>
    </tr>
  `).join("");
}
