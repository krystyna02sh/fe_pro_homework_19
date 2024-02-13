const btns = document.querySelectorAll('.btn');
const container = document.getElementById('container')
function addShadow(el) {
    el.classList.add("dark");
};
const promises = Array.from(btns).map(btn => {
    const btnNum = parseInt(btn.textContent);
    if (btnNum % 2 === 0) {
        return new Promise(resolve => {
            btn.onclick = () => resolve(btn);
        });

    } else {
        return btn;
    }
});
promises.forEach(promise => {
    if (promise instanceof Promise) {
        promise.then(btn => {
            addShadow(btn);
        });
    }
});

const promises2 = Array.from(btns).map(btn => {
    const btnNum2 = parseInt(btn.textContent);
    if (btnNum2 % 2 !== 0) {
        return new Promise(resolve => {
            btn.onclick = () => resolve(btn);
        });
    } else {
        return btn;
    }
});
promises2.forEach(promise => {
    if (promise instanceof Promise) {
        promise.then(btn => {
            addShadow(btn);
        });
    }
});
Promise.all(promises)
    .then(() => {
        const textElement = document.createElement('p');
        textElement.textContent = "Парні кнопки натиснуті";
        document.body.appendChild(textElement);
    }

    )
    .catch(error => {
        console.error("Виникла помилка:", error);
    });
Promise.all(promises2)
    .then(() => {
        const text = document.createElement('p');
        text.textContent = "Непарні кнопки натиснуті";
        document.body.appendChild(text);
    }

    )
    .catch(error => {
        console.error("Виникла помилка:", error);
    });

Promise.all([...promises, ...promises2])
    .then(function () {
        const textfin = document.createElement('p');
        textfin.textContent = "Всі кнопки натиснуті";
        document.body.appendChild(textfin);;
    })
    .catch(error => {
        alert("Виникла помилка:", error);
    });

