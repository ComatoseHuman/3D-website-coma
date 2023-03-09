

var albumOneCurrentImage = document.getElementById("albumonecurrent")
var albumOneThumbs = document.getElementById("albumonethumbs")

for (var i = 1; i <= 6; i++ ) {
    var a1Thumb = document.createElement("img");
    a1Thumb.src = "albumone/" + i +".png";
    a1Thumb.alt = "image" + i;
    a1Thumb.classList.add("thumb");
    albumOneThumbs.appendChild(a1Thumb);
    a1Thumb.addEventListener(
        "click", function() {
        albumOneCurrentImage.src = this.src;
        albumOneCurrentImage.alt = this.alt;
        }
    );
}

var albumTwoCurrentImage = document.getElementById("albumtwocurrent")
var albumTwoThumbs = document.getElementById("albumtwothumbs")

for (var i = 1; i <= 4; i++ ) {
    var a2Thumb = document.createElement("img");
    a2Thumb.src = "albumtwo/" + i +".png";
    a2Thumb.alt = "image" + i;
    a2Thumb.classList.add("thumb");
    albumTwoThumbs.appendChild(a2Thumb);
    a2Thumb.addEventListener(
        "click", function() {
        albumTwoCurrentImage.src = this.src;
        albumTwoCurrentImage.alt = this.alt;
        }
    );
}