{
    // problem = 5
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

    function getProperty<O extends object, P extends keyof O>(object: O, property: P): O[P] {
        return object[property];
    }

    type Pc = {
        name: string;
        modelPublished?: number;
        cpu: string;
    };

    // const person = { name: "Alice", age: 30 };
    // console.log(getProperty(person, "name"));


}