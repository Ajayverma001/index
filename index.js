const wpStatusDetails = [
    {
        name: "raj",
        uploadTime: "10:15 AM",
        profileImage: "https://images.unsplash.com/photo-1733175697085-aa500b61ac74?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusImage: "https://images.unsplash.com/photo-1733175697085-aa500b61ac74?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "rahul",
        uploadTime: "9:30 AM",
        profileImage: "https://images.unsplash.com/photo-1734084192508-33bd2cd57f09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusImage: "https://images.unsplash.com/photo-1734084192508-33bd2cd57f09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

var allstatus = document.querySelector(".allstatus");
var content = '';
var modal = document.getElementById('statusModal');
var modalImage = document.getElementById('modalImage');

wpStatusDetails.forEach(function(elem, idx) {
    content += `
    <div class="status" id="status-${idx}">
        <div id="${idx}" class="overlay"></div>
        <img src="${elem.profileImage}" alt="Profile Image">
        <div class="detail">
            <h2>${elem.name}</h2>
            <h4>${elem.uploadTime}</h4>
        </div>
    </div>
    `;
});

allstatus.innerHTML = content;

wpStatusDetails.forEach(function(elem, idx) {
    var statusElement = document.getElementById(`status-${idx}`);
    statusElement.addEventListener("click", function() {
        modal.style.display = "flex"; 
        modalImage.src = elem.statusImage; 
    });
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
});
