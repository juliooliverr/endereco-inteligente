        const form = document.getElementById('enderecoForm');
        const cep = document.getElementById('cep');
        const logradouro = document.getElementById('logradouro');
        const numero = document.getElementById('numero');
        const uf = document.getElementById('uf');

        //máscara
        cep.addEventListener('input', () => {
            cep.value = cep.value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
        });

        //uf para maiuscúlo
        uf.addEventListener('input', () => {
            uf.value = uf.value.toUpperCase();
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            //validações
            const cepRegex = /^\d{5}-\d{3}$/;
            const ufRegex = /^[A-Z]{2}$/;

            if (!cepRegex.test(cep.value)) {
                alert('CEP inválido! Formato correto: 00000-000');
                return;
            }

            if (logradouro.value.length < 5) {
                alert('Logradouro deve ter no mínimo 5 caracteres');
                return;
            }

            if (!/^\d+$/.test(numero.value)) {
                alert('Número deve conter apenas dígitos');
                return;
            }

            if (!ufRegex.test(uf.value)) {
                alert('UF inválido! Utilize apenas 2 letras maiúsculas');
                return;
            }

            alert('Endereço cadastrado com sucesso');
            form.reset();
        });