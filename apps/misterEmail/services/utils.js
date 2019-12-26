export function getRandomID() {
    let letters = 'tjoiynfnrjeakgpoiiytreqwasdfghjklmnbvcxxssersgyushquiz';
    let id = '';
    for (let i = 0; i < 10; i++) {
        let ind = Math.floor(Math.random() * letters.length)
        id += letters[ind];
    }
    return id;
}