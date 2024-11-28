document.addEventListener('DOMContentLoaded', () => {
    const slide = document.getElementById('slide');
    const slides = slide.children;
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;

    // スライドの幅を設定
    const slideCount = slides.length;
    slide.style.width = `${slideCount * 100}%`;
    Array.from(slides).forEach(slideItem => {
        slideItem.style.width = `${100 / slideCount}%`;
    });

    const updateSlidePosition = () => {
        slide.style.transform = `translateX(-${currentIndex * (100 / slideCount)}%)`;
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlidePosition();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidePosition();
    }, 5000);
});
