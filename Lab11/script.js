const API_URL = 'https://jsonplaceholder.typicode.com';

const albumList = document.getElementById('album-list');
const gallery = document.getElementById('gallery');
const albumTitleEl = document.getElementById('album-title');
const albumDescEl = document.getElementById('album-desc');
const formSection = document.getElementById('form-section');
const form = document.getElementById('add-photo-form');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

async function fetchAlbums() {
    try {
        const response = await fetch(`${API_URL}/albums`);
        const albums = await response.json();

        albumList.innerHTML = '';

        albums.slice(0, 20).forEach(album => {
            const div = document.createElement('div');
            div.className = 'album-item';
            div.textContent = `${album.id}. ${album.title}`;
            div.onclick = () => fetchPhotos(album.id, album.title);
            albumList.appendChild(div);
        });
    } catch (error) {
        albumList.innerHTML = '<p style="color:red;">Błąd pobierania albumów.</p>';
        console.error('Error fetching albums:', error);
    }
}

async function fetchPhotos(albumId, albumTitle) {
    try {
        albumTitleEl.textContent = `Album: ${albumTitle}`;
        albumDescEl.style.display = 'block';
        formSection.style.display = 'block';
        document.getElementById('form-album-id').value = albumId;

        gallery.innerHTML = '<p>Ładowanie zdjęć...</p>';

        const response = await fetch(`${API_URL}/photos?albumId=${albumId}`);
        const photos = await response.json();

        gallery.innerHTML = '';

        photos.slice(0, 12).forEach(photo => {
            const img = document.createElement('img');

            const newThumbnailUrl = `https://picsum.photos/id/${photo.id}/150/150`;
            const newFullUrl = `https://picsum.photos/id/${photo.id}/600/600`;

            img.src = newThumbnailUrl;
            img.alt = photo.title;
            img.title = photo.title;

            img.onclick = () => openLightbox(newFullUrl);
            gallery.appendChild(img);
        });
    } catch (error) {
        gallery.innerHTML = '<p style="color:red;">Błąd pobierania zdjęć.</p>';
        console.error('Error fetching photos:', error);
    }
}

function openLightbox(imageUrl) {
    lightboxImg.src = imageUrl;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => { lightboxImg.src = ''; }, 300);
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Wysyłanie...';
    submitBtn.disabled = true;

    const newPhoto = {
        albumId: document.getElementById('form-album-id').value,
        title: document.getElementById('form-title').value,
        url: document.getElementById('form-url').value,
        thumbnailUrl: document.getElementById('form-thumbnail').value
    };

    try {
        const response = await fetch(`${API_URL}/photos`, {
            method: 'POST',
            body: JSON.stringify(newPhoto),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const jsonResult = await response.json();
        console.log('Odpowiedź z serwera:', jsonResult);

        alert(`Sukces! Zapisano dane w API.\nOtrzymane ID nowego zdjęcia: ${jsonResult.id}\nTytuł: ${jsonResult.title}`);
        form.reset();
    } catch (error) {
        alert('Wystąpił błąd podczas wysyłania danych.');
        console.error('Error posting photo:', error);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

fetchAlbums();