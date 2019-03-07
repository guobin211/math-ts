/**
 * 枚举
 */
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

/**
 * 异构枚举
 */
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

interface MyDirection {
    up: Direction.Up,
}

/**
 * 创建枚举对象
 * @param input
 */
function getMyDirection(input: MyDirection) {
    console.log(input);
}

getMyDirection({up: Direction.Up});
