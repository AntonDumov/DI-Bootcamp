// Instructions
// In this exercise, you will use object oriented programming concepts
// to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    // Create a method called watch() which displays a string as follows:
    // “uploader parameter watched all time parameter of title parameter!”
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`)
    }

}

// Instantiate a new Video instance and call the watch() method.
const video1 = new Video("video1", "Alice", 300);
video1.watch();

// Instantiate a second Video instance with different values.
const video2 = new Video("video2", "Bob", 600);
video2.watch();

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
const videoData = [
    ["video3", "Carol", 1800],
    ["video4", "Dave", 900],
    ["video5", "Eve", 1200],
    ["video6", "Frank", 1500],
    ["video7", "Grace", 1800]
];
// Think of the best data structure to save this information within the array.
const videos = videoData.map(data => new Video(...data));

// Bonus: Loop through the array to instantiate those instances.
videos.forEach(video => video.watch());