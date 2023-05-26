document.querySelector('[data-tab="1"]').addEventListener('click', function() {
    document.querySelector('[data-tab="2"]').classList.remove('active')
    document.querySelector('[data-dia="2"]').classList.add('hidden')
    document.querySelector('[data-tab="1"]').classList.add('active')
    document.querySelector('[data-dia="1"]').classList.remove('hidden')
});

document.querySelector('[data-tab="2"]').addEventListener('click', function() {
    document.querySelector('[data-tab="1"]').classList.remove('active')
    document.querySelector('[data-dia="1"]').classList.add('hidden')
    document.querySelector('[data-tab="2"]').classList.add('active')
    document.querySelector('[data-dia="2"]').classList.remove('hidden')
})