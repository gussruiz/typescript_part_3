export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            else {
                console.log(`busncado elemento do dom com o seletor ${seletor} para injetar em ${propertyKey}`);
                return elemento;
            }
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
;
