import axios from 'axios';
export class FakeYoutubeAPI {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword() {
    return await axios
      .get(`/videos/search.json`) //
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return await axios
      .get(`/videos/popular.json`) //
      .then(res => res.data.items);
  }
}
//함수앞에 #을 붙히면 js에서는 프라이빗 함수이다.
//프라이빗함수는 클래스 내부적으로 호출가능, 외부에서는 호출불가.
