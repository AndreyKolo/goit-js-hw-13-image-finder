export default {
  query: '',
  pageNumber: 1,
  buttonPosition: 0,
  baseUrl: 'https://pixabay.com/api/',
  key: '16007811-de3293636e506fef23e7bb348',

  fetchImages() {
    const requestParam = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.pageNumber}&per_page=12&key=${this.key}`;
    return fetch(this.baseUrl + requestParam)
      .then(res => res.json());
  },
};
