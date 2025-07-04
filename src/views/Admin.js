import react from "react";
import "../styles/admin.css";

function Admin() {
    return (
        <div>

            {/* Barra lateral */}
            <div className="sidebar">
                <h2>Gimnasio</h2>
                <a href="#">Dashboard</a>
                <a href="#">Clientes</a>
                <a href="#">Suscripciones</a>
                <a href="#">Reportes</a>
                <a href="#">Configuración</a>
            </div>

            {/* Contenido principal */}
            <div className="main-content">

                {/* Sección Clientes */}
                <div className="section">
                    <div className="top-bar">
                        <h3>Administrar clientes</h3>
                        <button className="btn">Agregar Cliente</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Teléfono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Pérez</td>
                                <td>juan@email.com</td>
                                <td>55 1234 5678</td>
                                <td><button class="btn">Editar</button></td>
                            </tr>
                            <tr>
                                <td>Ana López</td>
                                <td>ana@email.com</td>
                                <td>55 9876 5432</td>
                                <td><button class="btn">Editar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Sección Suscripciones */}
                <div className="section">
                    <div className="top-bar">
                        <h3>Administrar Suscripciones</h3>
                        <button className="btn">Nueva Suscripción</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Fecha de inicio</th>
                                <th>Vencimiento</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Pérez</td>
                                <td>Mensual</td>
                                <td>01/06/2025</td>
                                <td>30/06/2025</td>
                                <td>Activa</td>
                            </tr>
                            <tr>
                                <td>Ana López</td>
                                <td>Anual</td>
                                <td>01/01/2025</td>
                                <td>31/12/2025</td>
                                <td>Activa</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    );
}

export default Admin;