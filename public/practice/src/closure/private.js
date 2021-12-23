const person = () => {
    let saveName = "Chanfle";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Jaiden');
console.log(newPerson.getName());