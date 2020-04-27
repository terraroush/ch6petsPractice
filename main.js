const sophie = {
    name: "Sophie",
    species: "domestic long-hair cat",
    nicknames: [
        "Soph-loaf", "Sophie-loafie", "Muffin", "Little Muffin", "Grandma"
    ],
    age: 21,
    lickTape: function () {
        window.alert("YUM, I love licking tape!")
    },
    sleep: function () {
        window.alert("zzzzz...snore...")
    },
    purr: function () {
        window.alert("purrrrrrrrrrr!")
    },
    favoriteToys: [],
    play: function (toy) {

      this.favoriteToys.push(toy)    
    }
}
// sophie.lickTape()
// sophie.sleep()
// sophie.purr()
sophie.play("weird snake")
sophie.play("weird mouse")
console.log(sophie.favoriteToys)