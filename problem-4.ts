{
    // Problem = 4;
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
    type Circle = {
        shape: 'circle';
        radius: number;
    };
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === 'circle') {
            const resultCircle = Math.PI * shape.radius * shape.radius;
            return resultCircle;
        }
        else (shape.shape === 'rectangle'); {
            const resultRectangle = shape.width * shape.height;
            return resultRectangle;
        }
    }

    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    // const rectangleArea = calculateShapeArea({
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6,
    // });

    // console.log(circleArea);
    // console.log(rectangleArea);

}