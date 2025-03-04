document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  // Enter 키 확인
        event.preventDefault(); // 기본 동작 방지 (필요시)
        let query = this.value.trim(); // 입력값 가져오기
        if (query) {
            window.location.href = `/search?q=${encodeURIComponent(query)}`; // 검색 페이지로 이동
        }
    }
});
