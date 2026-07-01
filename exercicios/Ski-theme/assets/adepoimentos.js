class DepoimentosCarousel extends HTMLElement {
  connectedCallback() {
    this.prevBtn = this.querySelector(".carousel__prev");
    this.nextBtn = this.querySelector(".carousel__next");
    this.track = this.querySelector(".depoimentos-wrapper");

    this.prevBtn.addEventListener("click", () => this.scroll("prev"));
    this.nextBtn.addEventListener("click", () => this.scroll("next"));
  }

  scroll(direction) {
    const cardWidth = this.track.querySelector(".depoimento").offsetWidth + 16;
    this.track.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  }
}

customElements.define("depoimentos-carousel", DepoimentosCarousel);
