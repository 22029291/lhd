// FAQ 검색 기능
function searchFAQ() {
    let input = document.getElementById("searchFAQ").value.toLowerCase();
    let faqItems = document.querySelectorAll(".faq-section li");

    faqItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

// 검색 자동완성
document.getElementById("searchFAQ").addEventListener("keyup", function() {
    let input = this.value.toLowerCase();
    let suggestions = document.getElementById("suggestions");

    let faqData = [
        "회원 가입은 어떻게 하나요?",
        "포인트 적립 기준은 무엇인가요?",
        "배송은 얼마나 걸리나요?",
        "환불 및 교환 정책이 궁금해요.",
        "비밀번호를 변경하고 싶어요."
    ];

    suggestions.innerHTML = "";
    if (input) {
        faqData.forEach(item => {
            if (item.toLowerCase().includes(input)) {
                let li = document.createElement("li");
                li.textContent = item;
                li.addEventListener("click", function() {
                    document.getElementById("searchFAQ").value = item;
                    suggestions.innerHTML = "";
                });
                suggestions.appendChild(li);
            }
        });
    }
});
