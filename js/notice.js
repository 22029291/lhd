function searchNotices() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll(".notice-row");

    rows.forEach(row => {
        let title = row.cells[2].textContent.toLowerCase();
        if (title.includes(input)) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}
// 공지사항 카테고리 필터링
function filterNotices(category) {
    let rows = document.querySelectorAll(".notice-row");
    let buttons = document.querySelectorAll(".tab-button");

    // 모든 버튼에서 active 클래스 제거 후, 해당 카테고리 버튼에 추가
    buttons.forEach(btn => {
        if (btn.getAttribute("data-category") === category) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // 선택된 카테고리에 맞는 행만 표시
    rows.forEach(row => {
        let rowCategory = row.getAttribute("data-category");
        row.style.display = (category === "all" || rowCategory === category) ? "table-row" : "none";
    });
}



/* 페이지네이션 기능 */
document.addEventListener("DOMContentLoaded", function() {
    let pageNumbers = document.querySelectorAll(".page-number");
    let prevPage = document.querySelector(".prev-page");
    let nextPage = document.querySelector(".next-page");
    let buttons = document.querySelectorAll(".tab-button");

    pageNumbers.forEach(button => {
        button.addEventListener("click", function() {
            pageNumbers.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    prevPage.addEventListener("click", function() {
        let activeIndex = [...pageNumbers].findIndex(btn => btn.classList.contains("active"));
        if (activeIndex > 0) {
            pageNumbers[activeIndex].classList.remove("active");
            pageNumbers[activeIndex - 1].classList.add("active");
        }
    });

    nextPage.addEventListener("click", function() {
        let activeIndex = [...pageNumbers].findIndex(btn => btn.classList.contains("active"));
        if (activeIndex < pageNumbers.length - 1) {
            pageNumbers[activeIndex].classList.remove("active");
            pageNumbers[activeIndex + 1].classList.add("active");
        }
    });

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let buttons = document.querySelectorAll(".tab-button"); 
            console.log("버튼 요소들:", buttons); // 디버깅 로그 추가
            let category = this.getAttribute("data-category");

            console.log("버튼 클릭됨:", this.innerText); // 클릭 확인 로그

            console.log("선택한 카테고리:", category); // 데이터 속성 확인 로그

            // 모든 버튼에서 active 클래스 제거
            buttons.forEach(btn => btn.classList.remove("active"));

            // 현재 클릭한 버튼에 active 클래스 추가
            this.classList.add("active");
            filterNotices(category);
        });
    });
});
