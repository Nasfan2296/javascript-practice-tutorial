

{
    function createProgrammer(name,UseLanguage){
        return {
            name,
            UseLanguage,
            writeCode(){
                console.log(`${this.name} writes ${this.UseLanguage} code`);
            },
            drinkCoffee(){
                console.log(`${this.name} drinks coffee`);   
            }
        }
    }

    const newProgrammer=createProgrammer('Nasfan','Javascript');
    newProgrammer.writeCode();
    newProgrammer.drinkCoffee();
}