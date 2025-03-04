const selectedFilters = new Map(); // 선택한 필터 저장 (카테고리별 구분)

function toggleFilter(element) {
    const category = element.name; // 필터의 카테고리 (예: gender, age, product-type)
    const filterValue = element.value;

    if (selectedFilters.get(category) === filterValue) {
        selectedFilters.delete(category);
        element.checked = false;
    } else {
        selectedFilters.set(category, filterValue);
    }

    updateFilterDisplay();
}

function updateFilterDisplay() {
    const filterTagsContainer = document.getElementById("filter-tags");
    filterTagsContainer.innerHTML = "";

    selectedFilters.forEach((filter, category) => {
        const tag = document.createElement("span");
        tag.className = "filter-tag";
        tag.innerHTML = `${filter} <button onclick="removeFilter('${category}')">✖</button>`;
        filterTagsContainer.appendChild(tag);
    });
}

function removeFilter(category) {
    selectedFilters.delete(category);

    // 해당 카테고리의 라디오 버튼 체크 해제
    document.querySelectorAll(`input[name='${category}']`).forEach(input => {
        input.checked = false;
    });

    updateFilterDisplay();
}

function clearAllFilters() {
    selectedFilters.clear();

    // 모든 라디오 버튼 체크 해제
    document.querySelectorAll("input[type='radio']").forEach(input => {
        input.checked = false;
    });

    updateFilterDisplay();
}
