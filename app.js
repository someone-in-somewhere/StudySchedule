// Main Application Logic
let currentTab = 'android';
let currentFilter = 'all';
let searchQuery = '';

// Get course data based on current tab
function getCourseData() {
    return currentTab === 'android' ? androidCourseData : algorithmCourseData;
}

function getChapters() {
    return currentTab === 'android' ? androidChapters : algorithmChapters;
}

function getStorageKey() {
    return currentTab === 'android' ? 'completedLessons_android' : 'completedLessons_algorithm';
}

function getCompletedLessons() {
    return JSON.parse(localStorage.getItem(getStorageKey()) || '[]');
}

function saveCompletedLessons(lessons) {
    localStorage.setItem(getStorageKey(), JSON.stringify(lessons));
}

// Switch between tabs
function switchTab(tab) {
    currentTab = tab;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if ((tab === 'android' && btn.textContent.includes('Android')) ||
            (tab === 'algorithm' && btn.textContent.includes('Thuật toán'))) {
            btn.classList.add('active');
        }
    });

    // Update title
    document.getElementById('course-title').textContent =
        tab === 'android' ? 'Android Development & Testing' : 'Thuật toán & Cấu trúc dữ liệu';

    // Update stat label
    document.getElementById('stat-label').textContent =
        tab === 'android' ? 'Tổng số tiết' : 'Tổng số giờ';

    // Update chapter filter
    updateChapterFilter();

    // Reset filters
    searchQuery = '';
    document.getElementById('search-input').value = '';

    // Render
    updateStats();
    renderChapters();
}

function updateChapterFilter() {
    const select = document.getElementById('chapter-filter');
    const chapters = getChapters();

    select.innerHTML = '<option value="all">Tất cả chương</option>';
    chapters.forEach(ch => {
        select.innerHTML += `<option value="${ch.id}">${ch.name}</option>`;
    });
}

function toggleLesson(lessonId) {
    let completed = getCompletedLessons();
    const index = completed.indexOf(lessonId);

    if (index === -1) {
        completed.push(lessonId);
    } else {
        completed.splice(index, 1);
    }

    saveCompletedLessons(completed);
    updateStats();
    renderChapters();
}

function updateStats() {
    const courseData = getCourseData();
    const completed = getCompletedLessons();

    const totalLessons = courseData.length;
    const completedCount = completed.length;

    let totalPeriods;
    if (currentTab === 'android') {
        totalPeriods = courseData.reduce((sum, l) => sum + l.numPeriods, 0);
    } else {
        // For algorithm course, calculate total hours
        totalPeriods = courseData.reduce((sum, l) => {
            const hours = l.hours.split('-');
            return sum + parseInt(hours[0]);
        }, 0);
    }

    const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    document.getElementById('total-lessons').textContent = totalLessons;
    document.getElementById('completed-lessons').textContent = completedCount;
    document.getElementById('total-periods').textContent = totalPeriods;
    document.getElementById('progress-percent').textContent = percent + '%';
    document.getElementById('main-progress').style.width = percent + '%';
}

function getFilteredLessons() {
    const courseData = getCourseData();
    const completed = getCompletedLessons();
    const chapterFilter = document.getElementById('chapter-filter').value;

    return courseData.filter(lesson => {
        const matchesChapter = chapterFilter === 'all' || lesson.chapter === parseInt(chapterFilter);
        const matchesStatus = currentFilter === 'all' ||
            (currentFilter === 'completed' && completed.includes(lesson.id)) ||
            (currentFilter === 'incomplete' && !completed.includes(lesson.id));
        const matchesSearch = searchQuery === '' ||
            lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lesson.detail.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesChapter && matchesStatus && matchesSearch;
    });
}

function renderChapters() {
    const container = document.getElementById('chapters-container');
    const filteredLessons = getFilteredLessons();
    const chapters = getChapters();
    const courseData = getCourseData();
    const completed = getCompletedLessons();

    // Group by chapter
    const groupedByChapter = {};
    filteredLessons.forEach(lesson => {
        if (!groupedByChapter[lesson.chapter]) {
            groupedByChapter[lesson.chapter] = [];
        }
        groupedByChapter[lesson.chapter].push(lesson);
    });

    container.innerHTML = '';

    chapters.forEach(chapter => {
        if (!groupedByChapter[chapter.id] || groupedByChapter[chapter.id].length === 0) return;

        const chapterLessons = groupedByChapter[chapter.id];
        const totalInChapter = courseData.filter(l => l.chapter === chapter.id).length;
        const completedInChapter = courseData.filter(l =>
            l.chapter === chapter.id && completed.includes(l.id)
        ).length;

        const chapterEl = document.createElement('div');
        chapterEl.className = 'chapter';
        chapterEl.innerHTML = `
            <div class="chapter-header" onclick="toggleChapter(${chapter.id})">
                <h2>${chapter.name}</h2>
                <span class="chapter-progress">${completedInChapter}/${totalInChapter} bài</span>
            </div>
            <div class="chapter-content open" id="chapter-${chapter.id}">
                ${chapterLessons.map(lesson => renderLesson(lesson)).join('')}
            </div>
        `;
        container.appendChild(chapterEl);
    });
}

function renderLesson(lesson) {
    const completed = getCompletedLessons();
    const isCompleted = completed.includes(lesson.id);

    let noteClass = '';
    const note = lesson.note || '';
    if (note.includes('quan trọng') || note.includes('CRITICAL') || note.includes('Important') || note.includes('QUAN TRỌNG')) {
        noteClass = 'important';
    } else if (note.includes('NEW') || note.includes('Enhanced') || note.includes('🆕')) {
        noteClass = 'new';
    }

    // Different meta info for different courses
    let metaInfo;
    if (currentTab === 'android') {
        metaInfo = `
            <span>Tiết: ${lesson.periods}</span>
            <span>${lesson.numPeriods} tiết</span>
            ${lesson.prerequisite ? `<span>Tiên quyết: ${lesson.prerequisite}</span>` : ''}
        `;
    } else {
        metaInfo = `
            <span>${lesson.hours} giờ</span>
            <span>Sách: ${lesson.book ? lesson.book.substring(0, 30) + '...' : 'N/A'}</span>
            ${lesson.prerequisite && lesson.prerequisite !== 'Không' ? `<span>Tiên quyết: ${lesson.prerequisite}</span>` : ''}
        `;
    }

    return `
        <div class="lesson ${isCompleted ? 'completed' : ''}">
            <input type="checkbox" class="lesson-checkbox"
                ${isCompleted ? 'checked' : ''}
                onchange="toggleLesson(${lesson.id})">
            <div class="lesson-number">${lesson.id}</div>
            <div class="lesson-info">
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-meta">${metaInfo}</div>
                ${note ? `<span class="lesson-note ${noteClass}">${note}</span>` : ''}
            </div>
            <button class="view-detail" onclick="showDetail(${lesson.id})">Chi tiết</button>
        </div>
    `;
}

function toggleChapter(chapterId) {
    const content = document.getElementById(`chapter-${chapterId}`);
    content.classList.toggle('open');
}

function showDetail(lessonId) {
    const courseData = getCourseData();
    const lesson = courseData.find(l => l.id === lessonId);
    if (!lesson) return;

    document.getElementById('modal-title').textContent = lesson.title;

    if (currentTab === 'android') {
        document.getElementById('modal-lesson-id').textContent = `Bài ${lesson.id} | Tiết ${lesson.periods}`;
    } else {
        document.getElementById('modal-lesson-id').textContent = `Nội dung ${lesson.id} | ${lesson.hours} giờ`;
    }

    document.getElementById('modal-detail').textContent = lesson.detail;

    // Build meta info
    let metaHtml = '';
    if (currentTab === 'android') {
        metaHtml = `
            <div class="meta-item"><label>Số tiết</label><p>${lesson.numPeriods} tiết</p></div>
            ${lesson.note ? `<div class="meta-item"><label>Ghi chú</label><p>${lesson.note}</p></div>` : ''}
        `;
    } else {
        metaHtml = `
            <div class="meta-item"><label>Thời lượng</label><p>${lesson.hours} giờ</p></div>
            <div class="meta-item"><label>Sách tham khảo</label><p>${lesson.book || 'N/A'}</p></div>
            ${lesson.related ? `<div class="meta-item"><label>Liên quan</label><p>${lesson.related}</p></div>` : ''}
            ${lesson.note ? `<div class="meta-item"><label>Ghi chú</label><p>${lesson.note}</p></div>` : ''}
        `;
    }
    document.getElementById('modal-meta').innerHTML = metaHtml;

    // Prerequisite
    const prereq = lesson.prerequisite;
    if (prereq && prereq !== '' && prereq !== 'Không') {
        document.getElementById('prerequisite-section').style.display = 'block';
        document.getElementById('modal-prerequisite').textContent = prereq;
    } else {
        document.getElementById('prerequisite-section').style.display = 'none';
    }

    document.getElementById('lesson-modal').classList.add('show');
}

function closeModal() {
    document.getElementById('lesson-modal').classList.remove('show');
}

function resetProgress() {
    const courseName = currentTab === 'android' ? 'Android & Testing' : 'Thuật toán';
    if (confirm(`Bạn có chắc muốn xóa tất cả tiến độ học tập của khóa ${courseName}?`)) {
        saveCompletedLessons([]);
        updateStats();
        renderChapters();
    }
}

// Event listeners
document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderChapters();
});

document.getElementById('chapter-filter').addEventListener('change', () => {
    renderChapters();
});

document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.status;
        renderChapters();
    });
});

// Close modal when clicking outside
document.getElementById('lesson-modal').addEventListener('click', (e) => {
    if (e.target.id === 'lesson-modal') {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize
updateChapterFilter();
updateStats();
renderChapters();
