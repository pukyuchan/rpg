function 隊列 (Sprite_前: Sprite, Sprite_後: Sprite, 距離: number) {
    if (対角線の長さ(Sprite_前.x - Sprite_後.x, Sprite_前.y - Sprite_後.y) > 距離) {
        Sprite_後.follow(Sprite_前, 80)
    } else {
        Sprite_後.follow(Sprite_前, 0)
    }
}
function 対角線の長さ (x: number, y: number) {
    return Math.sqrt(x * x + y * y)
}
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`レベル1`)
let 赤 = sprites.create(img`
    ....................
    ....................
    ......222222........
    ....222222222.......
    ...22221212222......
    ....f11f11f11f......
    ....f11f11f11f......
    ....f11f11f11f......
    ....ff111111ff......
    .....ffffffff.......
    ....ffff2222ff......
    ...fff22ff22fff.....
    ...f1f2222fff1f.....
    ...ffffffffffff.....
    ......fff.fff.......
    .....ffff.ffff......
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
let 青 = sprites.create(img`
    ....................
    ....................
    ........8.68........
    .....86888888.......
    ....6688888668......
    ....888f11f18f......
    ....861f11f11f......
    ....f11f11f11f......
    ....ff111111ff......
    .....ffffffff.......
    ....ff966666ff......
    ...fff699666fff.....
    ...f1f888988f1f.....
    ...fff8fff99fff.....
    .....fff.f99f.......
    ....ffff.fffff......
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
let 黄 = sprites.create(img`
    ....................
    ....................
    ......557777........
    .....577757555......
    ....5555555777......
    ..22777f11f11f......
    ..22f11f11f11f......
    ...bf11f11f11f......
    ...bff111111ff......
    ..fff55755575.......
    ..f1f555f55755......
    ..fff575f555555.....
    ...b7755ff57757.....
    ...b555ffff7555.....
    ...b..fff.fff.......
    .....ffff.ffff......
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
scene.cameraFollowSprite(赤)
controller.moveSprite(赤, 70, 70)
赤.setPosition(91, 53)
青.setPosition(63, 53)
黄.setPosition(131, 53)
forever(function () {
    隊列(赤, 青, 15)
    隊列(青, 黄, 15)
})
