const buttonCount = 6;
const btns = [];
for (let i = 1; i <= buttonCount; i++) {
    const btnEl = document.createElement('button');
    btnEl.textContent = i;
    document.body.append(btnEl);
    btns.push(btnEl);
}
console.log(btns)
function makeGame() {

    function addShadow(el) {
        el.classList.add("dark");
    };

    // const btnPromises = btns.map(btn => {
    //     return new Promise(
    //         resolve => {
    //             btn.onclick = () => resolve(btn)
    //         }
    //     )
    // }
    // )
    // btnPromises.forEach(promise => {
    //     promise.then(btn => {
    //         addShadow(btn);
    //     });
    // })

    const btnPromises2 = btns.map(
        function (button, index) {
            if (index % 2 === 0) {
                return new Promise(
                    resolve => {
                        button.onclick = () => resolve(button);
                    }
                )
            }
        }
    )
    btnPromises2.then(button => {
        addShadow(button);
    });

    Promise.all(btnPromises2)
        .then(function () {
            alert("Непарні кнопки натиснуті");
        })
    const btnPromises3 = btns.map(
        function (button, index) {
            if (index % 2 !== 0) {
                return new Promise(
                    resolve => {
                        button.onclick = () => resolve(button);
                    }
                )
            }
        }
    )
    btnPromises3.forEach(promise => {
        promise.then(function (button) {
            addShadow(button);
        })
    })
    Promise.all(btnPromises3)
        .then(function () {
            alert("Парні кнопки натиснуті");
        })
    Promise.all(btnPromises2, btnPromises3)
        .then(function () {
            alert("Всі кнопки натиснуті");
        })

}
makeGame();
