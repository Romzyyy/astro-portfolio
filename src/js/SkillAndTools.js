const tabs = document.querySelectorAll('[data-target]')
const tabContent = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabs.forEach((t) => {
            t.classList.remove('active');
        });
        tab.classList.add('active');

        tabContent.forEach((tc) => {
            tc.classList.add('hidden')
        })
        target.classList.remove('hidden')
    })
})
