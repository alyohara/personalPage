export const attendance = {
    title: 'Attendance Record',
    retro: {
        welcome: {
            text: 'Welcome, {{name}}',
            email: '{{email}}',
        },
        label: 'Select the subject:',
        placeholder: 'Choose a subject',
        subjects: {
            ayed: 'Data Structures and Algorithms',
            ed: 'Data Structures',
            pc: 'Concurrent Programming',
        },
        selected: 'Selected subject:',
        register: 'Register Attendance',
        back: 'Back',
        logout: 'Log out',
        login: 'Sign in with Google',
        success: 'Attendance recorded successfully!',
    },
};

export type AttendanceDict = typeof attendance;
