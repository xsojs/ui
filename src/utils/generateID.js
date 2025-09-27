
const ids = [];

function generateID() {
    while (true) {
        const id = (Math.random() + 1).toString(36).substring(2);
        if (ids.indexOf(id) === -1) {
            ids.push(id);
            return id;
        }
    }
}

export default generateID;