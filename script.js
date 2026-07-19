(function() {
    const downloadBtn = document.getElementById('downloadBtn');

    // ============================================================
    // KONFIGURACJA - ZMIEŃ ŚCIEŻKĘ DO SWOJEGO PLIKU
    // ============================================================
    
    // OPCJA 1: GitHub Releases (POLECANA)
    const EXE_URL = 'https://github.com/TWOJA_NAZWA/lix-website/releases/download/v2.6.0/lix-terminal-setup.exe';
    
    // OPCJA 2: Plik w tym samym folderze
    // const EXE_URL = 'lix-terminal-setup.exe';
    
    const USE_REAL_FILE = true;

    // ============================================================
    // OBSŁUGA PRZYCISKU
    // ============================================================
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (USE_REAL_FILE) {
            const originalHTML = downloadBtn.innerHTML;
            
            downloadBtn.innerHTML = `
                <svg viewBox="0 0 24 24" style="animation: spin 1s linear infinite;">
                    <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2.5" fill="none" stroke-dasharray="30 30"/>
                </svg>
                Pobieranie...
            `;
            downloadBtn.style.opacity = '0.85';
            downloadBtn.style.pointerEvents = 'none';
            
            window.location.href = EXE_URL;
            
            setTimeout(() => {
                downloadBtn.innerHTML = originalHTML;
                downloadBtn.style.opacity = '1';
                downloadBtn.style.pointerEvents = 'auto';
            }, 3000);
            
        } else {
            const fakeContent = `LIX Terminal Setup v2.6.0\n\nTo jest wersja demonstracyjna.\nW rzeczywistej implementacji pobierzesz prawdziwy plik .exe.\n\n© 2026 LIX Terminal`;
            
            const blob = new Blob([fakeContent], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = 'lix-terminal-setup.exe';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

})();