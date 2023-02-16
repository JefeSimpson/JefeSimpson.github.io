function makeUser() {
    return {
        name: "John",
        // ref: this
        ref() {
            return this;
        }
    };
}

let user = makeUser();
// it comes from the func as undefined
alert( user.ref.name ); // the problem is that ref is property, and with method it'll work