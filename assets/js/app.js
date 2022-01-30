/*====================================
Functions
======================================*/
const owlActivation = (container) => {
    const check = container.classList.contains('owl-carousel');
    if (check) {
        $(container).owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            navText: [`<i class="bi bi-chevron-left text-white"></i>`, `<i class="bi bi-chevron-right text-white"></i>`],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    } else {
        return false;
    }
}
const renderData = (data, container) => {
    const check = container.classList.contains('row');
    container.innerHTML = '';
    data.map((element) => {
        let name = element.title;
        let img = element.images.fixed_height.url;
        let rating = element.rating;
        if (check) {
            container.innerHTML += `
                <div class="col-md-4 col-xl-3">
                    <div class="single">
                        <div class="card">
                            <figure>
                                <a href=${element.url} target="_blank"><img src=${img} class="img-fluid" alt="${name}" img-id="${element.id}"></a>
                            </figure>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div class="name">
                                        ${name}
                                    </div>
                                    <div class="rating text-warning">
                                        ${rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
        } else {
            container.innerHTML += `
                <div class="single">
                    <div class="card">
                        <figure>
                            <a href=${element.url} target="_blank"><img src=${img} class="img-fluid" alt="${name}" img-id="${element.id}"></a>
                        </figure>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div class="name">
                                    ${name}
                                </div>
                                <div class="rating text-warning">
                                    ${rating}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
        }
    });
    owlActivation(container);
}
const fetchData = async (url, container) => {
    lastUrl = url;
    const res = await fetch(url);
    const data = await res.json();
    currPage = data.page;
    console.log(data);
    renderData(data.data, container);
}
/*====================================
DOM Elements
======================================*/
const apiKey = 'jwCw3zzjzSI8kdWCwglZk17jd4UNikt6';
const gifUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
const stikerUrl = `https://api.giphy.com/v1/stickers/trending?api_key=${apiKey}`;
let currPage = 1;
let lastUrl = '';
const topGif = document.querySelector('#top-gif .owl-carousel');
const topStiker = document.querySelector('#top-striker .owl-carousel');
const allGif = document.querySelector('#gif .content');
const allStiker = document.querySelector('#striker .content');
const searchingSection = document.querySelector('#searching');
const searching = document.querySelector('#searching .content');
const searchForm = document.querySelector('#search');
const searchInput = document.querySelector('#search input');
searchingSection.style.display = 'none';
/*====================================
Functions Calling
======================================*/
if (topGif) {
    fetchData(gifUrl, topGif);
}
if (topStiker) {
    fetchData(stikerUrl, topStiker);
}
if (allGif) {
    fetchData(gifUrl, allGif);
}
if (allStiker) {
    fetchData(stikerUrl, allStiker);
}
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = searchInput.value.trim();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${v}&limit=10`;
    searchingSection.style.display = 'block';
    fetchData(url, searching);
    searchInput.value = '';
});