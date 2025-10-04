document.addEventListener('DOMContentLoaded', function() {
    /* ============================================= CÓDIGO PARA EL CONTROL DEL SIDEBAR (MENÚ LATERAL)=============================================*/


    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.sidebar-overlay');

    /* ============================================= EVENTO: ABRIR SIDEBAR ============================================= */

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    /* =============================================  EVENTO: CERRAR SIDEBAR (BOTÓN DE CIERRE)============================================= */
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    /* =============================================   EVENTO: CERRAR SIDEBAR (CLIC EN OVERLAY)============================================= */
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});