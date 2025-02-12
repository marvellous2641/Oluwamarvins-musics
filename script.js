function uploadMusic() {
    const fileInput = document.getElementById("musicUpload");
    const musicList = document.getElementById("musicList");

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const listItem = document.createElement("p");
        listItem.textContent = file.name;
        musicList.appendChild(listItem);
        alert("Music uploaded successfully!");
    } else {
        alert("Please select a file to upload.");
    }
}