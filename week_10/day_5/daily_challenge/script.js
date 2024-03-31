const API_KEY = '0f48148b0aa91ae37ed2673d';
const getCurrenciesUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
const convertUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/`;

const getCurrencies = async () => {
    try {
        const r = await fetch(getCurrenciesUrl);
        const data = await r.json();
        if (data.result === 'success') {
            return data.supported_codes;
        } else {
            throw new Error('Failed to fetch currencies');
        }
    } catch (e) {
        console.error(e);
    }
};

const convertAmount = async (from , to, amount) => {
    try {
        const r = await fetch(convertUrl + `${from}/${to}/${amount}/`);
        const data = await r.json();
        if (data.result === 'success') {
            return data.conversion_result;
        } else {
            throw new Error('Failed to fetch converted amount');
        }
    } catch (e) {
        console.error(e)
    }
};

const selectTags = Array.from(document.querySelectorAll('select'));
const formTag = document.querySelector('form');
const outputTag = document.querySelector('output');
const switchButton = document.querySelector('#switch');

const handleSubmit = async () => {
    const formData = new FormData(formTag);
    const fromCurrency = formData.get('from');
    const toCurrency = formData.get('to');
    const amount = formData.get('amount');
    outputTag.innerText = await convertAmount(fromCurrency, toCurrency, amount) + toCurrency;
};

const main = async () => {
    const currencies = await getCurrencies();
    currencies.forEach(c => {
        selectTags.forEach(t => {
            t.innerHTML += `<option value="${c[0]}">${c[1]}</option>`;
        });
    });
    formTag.addEventListener('submit', async (e) => {
        e.preventDefault();
        handleSubmit();
    });
    switchButton.addEventListener('click', async () => {
        const fromCurrencyValue = selectTags[0].value;
        selectTags[0].value = selectTags[1].value;
        selectTags[1].value = fromCurrencyValue;
        handleSubmit();
    });
};

main();
