import type { AttendanceDict as EnAttendanceDict } from '../en/attendance';

export const attendance: EnAttendanceDict = {
    title: 'Toma de Asistencia',
    retro: {
        welcome: {
            text: 'Bienvenido, {{name}}',
            email: '{{email}}',
        },
        label: 'Selecciona la materia:',
        placeholder: 'Elige una materia',
        subjects: {
            ayed: 'Algoritmos y Estructuras de Datos',
            ed: 'Estructuras de Datos',
            pc: 'Programación Concurrente',
        },
        selected: 'Materia seleccionada:',
        register: 'Registrar Asistencia',
        back: 'Volver',
        logout: 'Salir',
        login: 'Ingresar con Google',
        success: '¡Asistencia registrada correctamente!',
    },
};

export type AttendanceDict = typeof attendance;
