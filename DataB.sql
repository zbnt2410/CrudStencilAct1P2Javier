USE tareas_db;


-- Crear la tabla tareas
CREATE TABLE tareas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo en la tabla tareas
INSERT INTO tareas (title, description, start_time, end_time) VALUES 
('Comprar comestibles', 'Comprar leche, pan, huevos y frutas.', '09:00:00', '10:00:00'),
('Lavar el coche', 'Lavar y aspirar el coche el sábado.', '10:30:00', '12:00:00'),
('Estudiar para el examen', 'Repasar los capítulos 4 y 5 del libro de matemáticas.', '14:00:00', '16:00:00'),
('Reunión con el equipo de proyecto', 'Reunión a las 3:00 PM para discutir el progreso del proyecto.', '15:00:00', '16:00:00'),
('Pagar facturas', 'Pagar la factura de electricidad y el agua.', '08:00:00', '09:00:00'),
('Sacar al perro a pasear', 'Pasear al perro por el parque cada mañana.', '07:00:00', '07:30:00'),
('Preparar la cena', 'Cocinar una cena saludable para la familia.', '18:00:00', '19:00:00'),
('Leer un libro', 'Leer al menos 20 páginas de un libro cada día.', '20:00:00', '21:00:00'),
('Ir al gimnasio', 'Hacer ejercicio en el gimnasio tres veces a la semana.', '17:00:00', '18:00:00'),
('Planificar vacaciones', 'Planificar las actividades y destinos para las próximas vacaciones.', '16:00:00', '17:00:00'),
('Actualizar el currículo', 'Actualizar el currículo con la experiencia laboral reciente.', '11:00:00', '12:00:00'),
('Revisar correos electrónicos', 'Revisar y responder a los correos electrónicos pendientes.', '08:30:00', '09:00:00'),
('Limpiar la casa', 'Hacer una limpieza general de la casa el domingo.', '10:00:00', '12:00:00'),
('Comprar regalos', 'Comprar regalos para el cumpleaños de Juan y Ana.', '14:00:00', '15:30:00'),
('Revisar el coche', 'Hacer un chequeo general del coche antes del viaje.', '09:00:00', '10:00:00'),
('Organizar el escritorio', 'Ordenar y limpiar el escritorio de trabajo.', '17:00:00', '18:00:00'),
('Revisar el presupuesto', 'Revisar y ajustar el presupuesto mensual.', '19:00:00', '20:00:00'),
('Tomar un curso en línea', 'Inscribirse y completar un curso en línea sobre desarrollo web.', '18:00:00', '20:00:00'),
('Hacer la declaración de impuestos', 'Completar y enviar la declaración de impuestos anual.', '09:00:00', '11:00:00'),
('Asistir a una conferencia', 'Participar en la conferencia de tecnología el próximo viernes.', '10:00:00', '12:00:00');



