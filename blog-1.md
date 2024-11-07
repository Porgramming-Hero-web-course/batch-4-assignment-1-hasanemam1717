1.The significance of union and intersection types in Typescript.


==> Union Types:
Union types allow a variable to accept multiple types. This is helpful when you’re not sure if the input will be one type or another.

Example: Describing Different Pet Types
Imagine we have a function that describes a pet. The pet could be a Dog or a Cat, so we’ll use a union type to allow both.

code :

function describePet(pet: "Dog" | "Cat") {
    if (pet === "Dog") {
        console.log("This is a friendly dog!");
    } else if (pet === "Cat") {
        console.log("This is a curious cat!");
    }
}

describePet("Dog"); // Output: This is a friendly dog!
describePet("Cat"); // Output: This is a curious cat!

==>Intersection Types:
Combining Properties from Multiple Types
An intersection type is useful when you want an object to have properties from multiple types. It’s like saying, “This object should have everything from Type A and everything from Type B.”

Example: Creating a Student Athlete
Suppose we have a Student type and an Athlete type. We can use an intersection type to create a StudentAthlete type that has properties from both types.

code :

type Student = { name: string; school: string };
type Athlete = { sport: string; team: string };

type StudentAthlete = Student & Athlete;

const studentAthlete: StudentAthlete = {
    name: "Hasan Emam",
    collage: "Azizul hok collage,Bogura",
    sport: "Football",
    team: "The normative"
};

console.log(studentAthlete);
// Output: { name: "Hasan Emam", collage: "Azizul hok collage,Bogura", sport: "Football", team: "The normative" }



