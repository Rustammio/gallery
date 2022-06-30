/*
    Напишите метод который будет применять анимацию fade-in и показывать все изображения из галереи одно за другим с небольшой задержкой после каждого.
    Вызовете метод через 5 секунд.
    Метод перебора для коллекции html элементов позаимствуйте у массива :)

    Пример: https://youtu.be/UDql4w8pExs
 */

const randomGallery = {
    container: document.querySelector('.gallery'),
    imagesCollection: document.getElementsByClassName('gallery__item'),

    renderImages(){
        for (let i = 0; i < 100; i++) {
            const html = `
            <div class="gallery__item">
                <img src="http://placeimg.com/200/200/any?v=${i}" />
            </div>
            `
            this.container.insertAdjacentHTML("beforeend", html);
        }
    },

    showImage(image, timeout) {
        setTimeout(() => {
            image.classList.add('fade-in');
            image.style.opacity = '1';
        }, timeout )
    },

    showImages(){
        const images = [].map.call(this.imagesCollection, (i)=>{
            return i
        })
        setTimeout(()=>{
            for(let i = 0; i < images.length; i++){
                this.showImage(images[i], 300 * i);

            }
        },5000)

        console.log(this.imagesCollection);
        console.log(images)
    }
}

randomGallery.renderImages();
randomGallery.showImages();
