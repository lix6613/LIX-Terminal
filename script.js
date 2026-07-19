(function() {
    const downloadBtn = document.getElementById('downloadBtn');

    // ============================================================
    // KONFIGURACJA - ZMIEŃ ŚCIEŻKĘ DO SWOJEGO PLIKU
    // ============================================================
    
    // OPCJA 1: GitHub Releases (POLECANA)
    
    // OPCJA 2: Plik w tym samym folderze
    // const EXE_URL = 'lix-terminal-setup.exe';
    
    const USE_REAL_FILE = true;

    // ============================================================
    // OBSŁUGA PRZYCISKU
    // ============================================================


    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

})();