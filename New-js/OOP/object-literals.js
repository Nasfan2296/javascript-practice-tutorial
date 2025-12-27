{let programmer={
    name:'Nasfan',
    UseLanguage:'JavaScript',
    writeCode:function(){
        console.log(`${this.name} writes ${this.UseLanguage} code`);
    },
    drink(){
        console.log(`${this.name} drinks coffee`);
    }
};

programmer.writeCode();
programmer.drink();
}


{
    let grocery={
        name:'Apple',
        qty:'4',
        show:function(){
            console.log(`${this.qty} x ${this.name}`);
        }
    };

    grocery.show();
}

