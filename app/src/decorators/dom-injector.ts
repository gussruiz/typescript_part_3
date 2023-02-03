export function domInjector(seletor: string) {
    return function(    
        target:any,
        propertyKey: string,
    ){
        let elemento: HTMLElement | null = null;
        const getter =  function () {
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);
            }else{
                console.log(`busncado elemento do dom com o seletor ${seletor} para injetar em ${propertyKey}`)
                return elemento
            }
        } 

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter}
        );
    }
};