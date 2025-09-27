// ==UserScript==
// @name         google-ai-mode-removal
// @namespace    http://tampermonkey.net/
// @version      10.0
// @description  Userscript to remove AI Mode button from Google search results
// @match        https://www.google.com/search*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    console.log("🚀 Script Modo IA iniciado");

    function removeModoIA() {
        // Procurar por todos os elementos que contenham o texto
        const elementos = document.querySelectorAll('*');

        for (const elemento of elementos) {
            if (elemento.textContent && elemento.textContent.includes('Modo IA')) {
                // Subir na árvore DOM para encontrar o botão
                let pai = elemento;
                while (pai && pai !== document.body) {
                    if (pai.tagName === 'BUTTON' ||
                        pai.getAttribute('role') === 'button' ||
                        pai.tagName === 'A') {

                        console.log("✅ Removendo:", pai);
                        pai.remove();
                        return true;
                    }
                    pai = pai.parentElement;
                }
            }
        }
        return false;
    }

    // Tentar remover imediatamente
    setTimeout(removeModoIA, 500);

    // Observar mudanças
    const observer = new MutationObserver(() => {
        removeModoIA();
    });

    // Iniciar observação quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    } else {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Verificação periódica
    setInterval(removeModoIA, 2000);
})();