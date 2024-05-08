let admin = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{}').data : null;
export default admin;