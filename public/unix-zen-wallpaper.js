class UnixZenWallpaper extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "closed" })

    const style = document.createElement("style")
    style.textContent = `
      div {
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #272b36;
        background-image: 
          linear-gradient(45deg, #272b36 25%, #1f222b 25%, #1f222b 50%, #272b36 50%, #272b36 75%, #1f222b 75%, #1f222b);
        background-size: 20vw 20vw;
        background-position: 0 0;
        color: #eeeeee;
        font-size: 2.2vw;
        font-family: JetBrains Mono;
        font-weight: bold;
        animation: rolling 6s infinite linear;
        user-select: none;
      }
      @keyframes rolling {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 20vw 0;
        }
      }
      p {
        text-align: center;
      }
      span.keyword {
        color: #af00db;
      }
      span.con {
        color: #02ff61;
      }
      span.shining {
        animation: shining 1s infinite;
      }
      @keyframes shining {
        0% {
          opacity: 0;
        }
        49.99% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
    `

    const wrapper = document.createElement("div")
    wrapper.innerHTML = `
      <p>
        <span><slot></slot>@life:/#</span>
        <span class="keyword">echo</span>
        <span class="con">"Do one thing, and do it well."</span><span class="shining">_</span>
      </p>
    `

    shadow.appendChild(style)
    shadow.appendChild(wrapper)
  }
}

customElements.define("unix-zen-wallpaper", UnixZenWallpaper)
