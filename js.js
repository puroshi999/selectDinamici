
        // Dati di esempio: regioni, province e comuni
        const dati = {
            lombardia: {
                milano: ['Milano', 'Rozzano', 'Sesto San Giovanni'],
                como: ['Como', 'Cernobbio', 'Bellagio']
            },
            lazio: {
                roma: ['Roma', 'Fiumicino', 'Tivoli'],
                viterbo: ['Viterbo', 'Tarquinia', 'Bagnaia']
            },
            'emilia-romagna': {
                bologna: ['Bologna', 'Borgo Panigale', 'Ferrara'],
                ravenna: ['Ravenna', 'Cervia', 'Faenza']
            }
            // Aggiungi altri dati secondo necessità
        };

        // Funzione per popolare le province in base alla regione selezionata
        function popolaProvince() {
            const regioneSelect = document.getElementById('regione');
            const provinciaSelect = document.getElementById('provincia');
            const comuneSelect = document.getElementById('comune');

            const regioneSelezionata = regioneSelect.value;
            provinciaSelect.innerHTML = '<option value="">Seleziona provincia</option>';
            comuneSelect.innerHTML = '<option value="">Seleziona comune</option>';

            if (regioneSelezionata in dati) {
                const province = Object.keys(dati[regioneSelezionata]);
                province.forEach(provincia => {
                    const option = document.createElement('option');
                    option.value = provincia;
                    option.textContent = provincia;
                    provinciaSelect.appendChild(option);
                });
            }
        }

        // Funzione per popolare i comuni in base alla provincia selezionata
        function popolaComuni() {
            const regioneSelect = document.getElementById('regione');
            const provinciaSelect = document.getElementById('provincia');
            const comuneSelect = document.getElementById('comune');

            const regioneSelezionata = regioneSelect.value;
            const provinciaSelezionata = provinciaSelect.value;

            comuneSelect.innerHTML = '<option value="">Seleziona comune</option>';

            if (regioneSelezionata in dati && provinciaSelezionata in dati[regioneSelezionata]) {
                const comuni = dati[regioneSelezionata][provinciaSelezionata];
                comuni.forEach(comune => {
                    const option = document.createElement('option');
                    option.value = comune;
                    option.textContent = comune;
                    comuneSelect.appendChild(option);
                });
            }
        }

