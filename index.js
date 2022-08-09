let home_count = 0
let guest_count = 0
let home_score = document.getElementById("home-score")
let guest_score = document.getElementById("guest-score")

// home functions
function home_btn_1() {
    home_count += 1
    home_score.innerText = home_count
}
function home_btn_2() {
    home_count += 2
    home_score.innerText = home_count
}
function home_btn_3() {
    home_count += 3
    home_score.innerText = home_count
}

// guest functions
function guest_btn_1() {
    guest_count += 1
    guest_score.innerText = guest_count
}
function guest_btn_2() {
    guest_count += 2
    guest_score.innerText = guest_count
}
function guest_btn_3() {
    guest_count += 3
    guest_score.innerText = guest_count
}

//reset
function btn_reset() {
    home_count = 0
    guest_count = 0
    home_score.innerText = 0
    guest_score.innerText = 0
}
